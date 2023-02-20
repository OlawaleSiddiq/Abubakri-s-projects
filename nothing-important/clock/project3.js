let miliseconds = document.getElementById('mili')
let seconds = document.getElementById('seconds')
let minutes = document.getElementById('minutes')
let start = document.getElementById('start')
let pause = document.getElementById('pause')
let reset = document.getElementById('reset')
let secondscount = 00;
let minutescount = 00
let interval

start.onclick = function () {
    clearInterval(interval)
    interval = setInterval(ticking, 1000)
}

function ticking() {
    secondscount++
    if (secondscount < 10) {
        seconds.innerText = '0' + secondscount
    }
    if (secondscount > 9) {
        seconds.innerText = secondscount
    }
    if (secondscount === 60) {
        minutescount++
        minutes.innerText = '0' + minutescount + ':'
        secondscount = 0
    }
    if (minutescount > 9) {
        minutes.innerText = minutescount + ':'
    }
    if (minutescount === 60) {
        clearInterval(interval)
    }
}