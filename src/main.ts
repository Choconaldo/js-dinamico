// DOM elements

const taskInputEl = document.getElementById("taskInput") as HTMLInputElement;
const taskListEl = document.getElementById("taskList") as HTMLDivElement;

// Task list array

const taskList: string[] = [];
//localStorage.setItem("@TASK", JSON.stringify(taskList));
// Add Task Function

renderTaskList();

function addTask() {
	const newtask = taskInputEl.value;
	taskList.push(newtask);
	//rederTaskList()
	localStorage.setItem("@TASK", JSON.stringify(taskList));
	renderTaskList();
}

// Add task button

taskListEl.addEventListener("click", addTask);

// Render task list function

function renderTaskList() {
	let taskList = localStorage.getItem("@TASK");
	if (taskList) {
		taskList = JSON.parse(taskList);
		console.log(taskList);
	}
}
