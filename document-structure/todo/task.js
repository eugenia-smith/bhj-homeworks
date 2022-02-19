'use strict';

let taskInput = document.getElementById('task__input');
let addBtn = document.getElementById('tasks__add');
let taskForm = document.getElementById('tasks__form');
let toDoList = document.getElementById('tasks__list');

function createTask(event) {

    if (event.code == 'Enter' || event.target == addBtn) {
        event.preventDefault();
        if (taskInput.value.trim() !== "") {
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
    }
}

taskForm.addEventListener('keydown', createTask);
taskForm.addEventListener('click', createTask)



