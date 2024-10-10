// DOM elements

const taskInputEl = document.getElementById("taskInput") as HTMLInputElement;
const taskListEl = document.getElementById("taskList") as HTMLDivElement;
const addButtonEl = document.getElementById("addButton") as HTMLButtonElement;

// Task list array

let taskList: string[] = getTasks();

renderTaskList();

function addTask() {
	const newtask = taskInputEl.value;
	taskList.push(newtask);
	localStorage.setItem("@TASK", JSON.stringify(taskList));
	taskInputEl.value = "";
	renderTaskList();
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
	if (taskListInMemoryArray) {
		taskListInMemoryArray.forEach((task: string) => {
			taskToBeRendered += `<li>${task}</li>`;
			taskListEl.innerHTML = taskToBeRendered;
		});
	}
}
