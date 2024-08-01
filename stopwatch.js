let minTag = document.getElementById('min');
let secTag = document.getElementById('sec');
let mSecTag = document.getElementById('msec');
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let sec = 0;
let mSec = 0;
let min = 0;

let flag = true;

function timer() {
    mSec = mSec + 1;
    if (mSec == 100) {
        sec = sec + 1;
        mSec = 0;
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
    }
    mSecTag.innerText = concatZero(mSec);
    secTag.innerText = concatZero(sec);
    minTag.innerText = concatZero(min);
}

let interval = null;

startBtn.addEventListener('click', function() {
    if (flag) {
        interval = setInterval(timer, 10);
        flag = false;
    }
});

stopBtn.addEventListener('click', function() {
    if (!flag) {
        clearInterval(interval);
        flag = true;
    }
});

resetBtn.addEventListener('click', function() {
    clearInterval(interval);
    flag = true;
    mSec = 0;
    min = 0;
    sec = 0;
    secTag.innerText = "00";
    mSecTag.innerText = "00";
    minTag.innerText = "00";
});

function concatZero(time) {
    if (time <= 9) return "0" + time;
    else return time;
}