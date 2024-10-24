"use strict";
class TodoList {
    constructor() {
        this.todos = [];
        this.currentId = 1;
    }
    addTask(task) {
        const newTodo = {
            id: this.currentId++,
            task,
        };
        this.todos.push(newTodo);
        this.render();
    }
    removeTask(id) {
        const index = this.todos.findIndex((todo) => todo.id === id);
        if (index !== -1) {
            this.todos.splice(index, 1);
            this.render();
        }
        else {
            alert(`Task with ID ${id} not found.`);
        }
    }
    render() {
        const todoListElement = document.getElementById("todoList");
        todoListElement.innerHTML = "";
        if (this.todos.length === 0) {
            todoListElement.innerHTML =
                '<li class="text-gray-500">No tasks available.</li>';
        }
        else {
            this.todos.forEach((todo) => {
                const li = document.createElement("li");
                li.className =
                    "bg-gray-100 border rounded-md px-4 py-2 flex justify-between items-center";
                li.innerHTML = `
                    <span>${todo.task}</span>
                    <button class="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600" onclick="myTodoList.removeTask(${todo.id})">Remove</button>
                `;
                todoListElement.appendChild(li);
            });
        }
    }
}
const myTodoList = new TodoList();
myTodoList.addTask("Buy groceries");
myTodoList.addTask("Complete the project");
myTodoList.addTask("Go for a run");
document.getElementById("addTaskButton").addEventListener("click", () => {
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value.trim();
    if (task !== "") {
        myTodoList.addTask(task);
        taskInput.value = "";
    }
    else {
        alert("Please enter a valid task.");
    }
});
myTodoList.render();
