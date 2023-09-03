class PomodoroTimer {
    constructor(defaultTime) {
        this.defaultTime = defaultTime;
        this.currentTime = defaultTime;
        this.decrementDisposer;

        this.timer = document.createElement('div');
        this.timer.innerText = this.#convertSSToHHMMSS(defaultTime);
        this.timer.id = 'timer';
    }

    get TimerHTML() {
        return this.timer;
    }

    resetDefaultTime(defaultTime) {
        this.defaultTime = defaultTime != null ? defaultTime : this.defaultTime;
        this.#setTimerHTML(this.defaultTime);
        clearTimeout(this.decrementDisposer);
    }

    startTimer() {
        this.#setTimerHTML(this.currentTime - 1);
        this.#decrementTimer();
    }

    #decrementTimer(delay = 1000) {
        if (this.currentTime > 0) {
            this.decrementDisposer = setTimeout(() => {
                this.#setTimerHTML(this.currentTime - 1);
                this.#decrementTimer(delay);
            }, delay);
            return false;
        }
        return true;
    }

    #setTimerHTML(newTime) {
        this.currentTime = newTime;
        this.timer.innerText = this.#convertSSToHHMMSS(newTime);
    }

    #convertSSToHHMMSS(seconds) {
        const numMinutes = Math.floor(seconds % 3600 / 60);
        const numSeconds = seconds % 3600 % 60;
        const hoursPart = seconds  >= 36000 ? Math.floor(seconds / 3600) : seconds >= 3600 ? '0' + Math.floor(seconds / 3600) : '00';
        const minutesPart = numMinutes >= 10 ? numMinutes : '0' + numMinutes;
        const secondsPart = numSeconds >= 10 ? numSeconds : '0' + numSeconds;
        return `${hoursPart}:${minutesPart}:${secondsPart}`;
    }

    #convertHHMMSSToSS(time) {
        const timeParts = time.split(':');
        return parseInt(timeParts[0]) * 3600 + parseInt(timeParts[1]) * 60 + parseInt(timeParts[2]);
    }
};

// export default PomodoroTimer;