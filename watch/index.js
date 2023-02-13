let miliseconds = document.getElementById('mili')
let seconds = document.getElementById('seconds')
let minutes = document.getElementById('minutes')
let hours = document.getElementById('hours')
let start = document.getElementById('start')
let pause = document.getElementById('pause')
// let reset = document.getElementById('reset')
let secondscount = 55;
let hourscount = 23;
let minutescount = 59
let interval

let dayT = 'am'
function ticking() {
    secondscount++
    if (secondscount < 10) {
        seconds.innerText = `0${secondscount} ${dayT}`
    }
    if (secondscount > 9) {
        seconds.innerText = `${secondscount} ${dayT}`
    }
    if (secondscount === 60) {
        secondscount = 0
        minutescount++
        minutes.innerText = `:0${minutescount}:`
    }
    if (minutescount > 9) {
        minutes.innerText = `:${minutescount}:`
    }
    if (minutescount === 60) {
        minutescount = 0
        minutes.innerText = `:0${minutescount}:`
        hourscount++
        hours.innerText = `0${hourscount}`
    }
    if (hourscount > 9) {
        hours.innerText = hourscount
    }
    if (hourscount > 12) {
        dayT = 'pm'
    } else {
        dayT = 'am'
    }

    if (hourscount > 23) {
        hourscount = 0
        hours.innerText = '0' + hourscount
    }

}
        
        start.onclick = function () {
            clearInterval(interval)
            interval = setInterval(ticking, 1000)
        }
        pause.onclick = function () {
            clearInterval(interval)
        }
        // reset.onclick = function () {
        //     secondscount = 00;
        //     hourscount = 00;
        //     minutescount = 00;
        // }