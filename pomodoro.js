var timer = document.getElementById("timer");
var start = document.getElementById("start");
var pause = document.getElementById("pause");
var resume = document.getElementById("resume");
var id;
var value = "00:00";
var sessionVal = 25;
var breakVal = 5;

function startTimer(m, s) {
    timer.textContent = m + ":" + s;
    if (s == 0) {
        if (m == 0) {
          breakTimer();
          return;

        } else if (m != 0) {
            m = m - 1;
            s = 60;
        }
    }

    s = s - 1;
    id = setTimeout(function () {
        startTimer(m, s)
    }, 1000);
}

function breakTimer(m, s) {
  startTimer(breakVal - 1, 59);
  if (s == 0) {
        if (m == 0) {
          startTimer(sessionVal - 1, 59);
          return;

        } else if (m != 0) {
            m = m - 1;
            s = 60;
        }
    }
}

function pauseTimer() {
    value = timer.textContent;
    clearTimeout(id);
}

function resumeTimer() {
    var t = value.split(":");

    startTimer(parseInt(t[0], 10), parseInt(t[1], 10));
}

start.addEventListener("click", function () {
    startTimer(sessionVal - 1, 59);
}, false);

pause.addEventListener("click", pauseTimer, false);

resume.addEventListener("click", resumeTimer, false);

// increment and decrement session and break timers

function upBreak() {
breakVal++;
  document.getElementById("break").innerHTML = breakVal;
}
function downBreak() {
  breakVal--;
  document.getElementById("break").innerHTML = breakVal;
}

function upSession() {
sessionVal++;
  document.getElementById("session").innerHTML = sessionVal;
  document.getElementById("timer").innerHTML = sessionVal;
}
function downSession() {
  sessionVal--;
  document.getElementById("session").innerHTML = sessionVal;
  document.getElementById("timer").innerHTML = sessionVal;
}
