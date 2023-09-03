// import PomodoroTimer from './models/pomodoroTimer.js';

const defaultSetting = {
    timePomodoro: {
        name: 'Pomodoro',
        time: 1500
    },
    timeShortBreak: {
        name: 'Short Break',
        time: 300
    },
    timeLongBreak: {
        name: 'Long Break',
        time: 900
    },
};

const container = document.querySelector('#skeleton');
const buttonContainer = document.querySelector('#buttonsContainer');

// Add Timer
const timer = new PomodoroTimer(defaultSetting.timePomodoro.time);
container.insertBefore(timer.TimerHTML, buttonContainer);

const title = document.createElement('h2');
container.insertBefore(title, timer.TimerHTML);
title.innerText = defaultSetting.timePomodoro.name;


// Add Pomodoro Types
const pomodoroTypesContainer = document.createElement('div');
pomodoroTypesContainer.className = 'buttonsContainer';
const pomodoroTypes = Object.keys(defaultSetting).forEach(
    (key) => {
        const typeButton = document.createElement('div');
        typeButton.innerText = defaultSetting[key].name;
        typeButton.className = 'button';
        typeButton.addEventListener('click', () => {
            timer.resetDefaultTime(defaultSetting[key].time);
            title.innerText = defaultSetting[key].name;
        });
        pomodoroTypesContainer.appendChild(typeButton);
    }
);
container.insertAdjacentElement('afterbegin', pomodoroTypesContainer);



// Add Buttons
const startButton = document.createElement('div');
startButton.className = 'button';
startButton.innerText = 'Start';
startButton.addEventListener('click', () => {
    timer.startTimer();
});
buttonContainer.appendChild(startButton);

const resetButton = document.createElement('div');
resetButton.className = 'button';
resetButton.innerText = 'Reset';
resetButton.addEventListener('click', () => {
    timer.resetDefaultTime();
});
buttonContainer.appendChild(resetButton);