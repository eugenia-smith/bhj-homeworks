'use strict';

let chatWindow = document.querySelector('.chat-widget');
let inputField = document.getElementById('chat-widget__input');
let messages = document.querySelector('.chat-widget__messages');
let date = new Date();
let currentTime = `${date.getHours()}:${date.getMinutes()}`;
let autoAnswers = [
    'Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
    'Добрый день, мы слишком заняты, чтобы помочь',
    'Что-то связь плохая. Напишите позднее',
    'Привет. Молчание -- золото',
    'Привет! ну что тебе еще?'
]

function getRandomElement(arr) {
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

chatWindow.addEventListener('click', () => chatWindow.classList.add('chat-widget_active'));


let sendMessage = function (event) {
    if (event.code == 'Enter' && inputField.value !== '') {
        messages.innerHTML +=
            `<div class="message message_client">
            <div class="message__time">${currentTime}</div>
            <div class="message__text">
            ${inputField.value}
            </div>
          </div>`;

        inputField.value = '';

    }
}

let getAnswer = function (event) {
    setTimeout(() => {
        if (event.code == 'Enter') {
            messages.innerHTML +=
                `<div class="message">
    <div class="message__time">${currentTime}</div>
    <div class="message__text">
      ${getRandomElement(autoAnswers)}
    </div>
  </div>`
        }
    }, 3000)
}

chatWindow.addEventListener('keydown', sendMessage);
chatWindow.addEventListener('keyup', getAnswer);
