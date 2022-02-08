'use strict';

let taskInput = document.getElementById('task__input');
let addBtn = document.getElementById('tasks__add');
let toDoList = document.getElementById('tasks__list');

addBtn.onclick = function (e) {
    e.preventDefault();

    let newTask = document.createElement('div');
    newTask.className = 'task';
    newTask.innerHTML = '<div class="task__title"></div> <a href="#" class="task__remove">&times;</a>';
    let taskTitle = newTask.querySelector('.task__title');
    let removeButton = newTask.querySelector('.task__remove');

    removeButton.onclick = function () {
        newTask.remove();
    }

    taskTitle.innerText = taskInput.value;
    toDoList.insertAdjacentElement('afterbegin', newTask);
    taskInput.value = "";
}




