// DOM elements capture

const taskInputEl = document.getElementById("taskInput") as HTMLInputElement;
const taskListEl = document.getElementById("taskList") as HTMLDivElement;
const addButtonEl = document.getElementById("addButton") as HTMLButtonElement;
const removeTaskEl = document.getElementById("removeTask") as HTMLDivElement;

// Task list array

let taskList: string[];

// Add task function

function addTask() {
	const newtask = taskInputEl.value;
	taskList.push(newtask);
	localStorage.setItem("@TASK", JSON.stringify(taskList));
	taskInputEl.value = "";
	initApp();
}

// Add task button

addButtonEl.addEventListener("click", addTask);

// Get tasks function

function getTasks() {
	const taskListInMemoryString = localStorage.getItem("@TASK");
	if (taskListInMemoryString) {
		const taskListInMemoryArray = JSON.parse(taskListInMemoryString);
		return taskListInMemoryArray;
	} else {
		return [];
	}
}

// Render task list function

function renderTaskList() {
	let taskToBeRendered = "";
	let taskListInMemoryArray = getTasks();
	if (taskListInMemoryArray.length) {
		taskListInMemoryArray.forEach((task: string, index: number) => {
			taskToBeRendered += `<li>Tarefa nº ${index + 1}: ${task}</li>`;
			taskListEl.innerHTML = taskToBeRendered;
		});
	} else {
		taskListEl.innerHTML = "";
	}
}

// Render remove task function

function renderRemoveTask() {
	if (taskList.length) {
		let taskNumber = "";
		let tasks = taskList.length;
		let index = 0;
		while (tasks > 0) {
			taskNumber += `<option value="${index}">${index + 1}</option>`;
			tasks -= 1;
			index += 1;
		}
		taskNumber = `
		<h2>Exclusão de tarefas:</h2><span>Excluir a tarefa nº</span>
        <select id="select">
          ${taskNumber}
        </select>
        <button id="removeButton">Excluir</button>
		`;
		removeTaskEl.innerHTML = taskNumber;
		const selectEl = document.getElementById("select") as HTMLSelectElement;
		document
			.getElementById("removeButton")!
			.addEventListener("click", () => {
				removeTask(Number(selectEl.value));
			});
	} else {
		removeTaskEl.innerHTML = "";
	}
}

// Remove task function

function removeTask(taskIndex: number) {
	let tasks = getTasks();
	tasks.splice(taskIndex, 1);
	localStorage.setItem("@TASK", JSON.stringify(tasks));
	initApp();
}

// Init App function

function initApp() {
	taskList = getTasks();
	renderTaskList();
	renderRemoveTask();
}

initApp();
