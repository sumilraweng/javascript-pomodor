export class Timer {
  constructor(minute) {
    this.timer = null;
    this.minute = minute;
    this.restartMinute = minute;
    this.second = 0;
  }

  //   ----------CreateMarkupMethod-----------
  createMarkup() {
    document.getElementById("minutes").innerHTML = String(this.minute).padStart(
      2,
      "0"
    );
    document.getElementById("seconds").innerHTML = String(this.second).padStart(
      2,
      "0"
    );
  }

  timerMarkup() {
    this.createMarkup();
    if (this.minute == 0) {
      this.minute = 0;
      this.second = 0;
      clearInterval(this.timer);
    }
    if (this.second == 0 && this.minute > 0) {
      this.second = 59;
      this.minute--;
    }
  }
  //   ----------TimerMethod-----------
  start() {
    this.timer = setInterval(() => {
      this.timerMarkup();
      this.second--;
    }, 1000);
  }
  pause() {
    clearInterval(this.timer);
  }

  //   ----------RestartMethod-----------
  restart() {
    clearInterval(this.timer);
    this.timer = null;
    this.minute = this.restartMinute;
    this.second = 0;
    this.createMarkup();
  }
  deleteInterval() {
    clearInterval(this.timer);
  }
}
