window.addEventListener('load',setTime )
let hourHand = document.querySelector('.hourHand')
let secondHand = document.querySelector('.secondHand')
let minuteHand = document.querySelector('.minuteHand')
let clockDate = document.querySelector('.date')
let date = new Date().toLocaleDateString('en-us',
{ weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' });

setInterval(setTime, 1000)

function setTime() {
    let time = new Date()
    let second = time.getSeconds() / 60;
    let minute = (second + time.getMinutes()) / 60;
    let hour = (minute + time.getHours()) / 12;
    setClock(minuteHand, minute)
    setClock(secondHand, second)
    setClock(hourHand, hour)

}

function setClock(element, rotationDegree) {
    element.style.setProperty('--rotate', rotationDegree * 360)
}
clockDate.innerText = date;