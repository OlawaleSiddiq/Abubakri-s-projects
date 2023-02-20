window.addEventListener('load', setClock)
let hourHand = document.querySelector('.hour-hand')
let minuteHand = document.querySelector('.minute-hand')
let secondHand = document.querySelector('.second-hand')
let clockDate = document.querySelector('.date')
let date = new Date().toLocaleDateString('en-us',
    { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' });
    
    function setClock() {
        let time = new Date();
    let second = time.getSeconds() / 60;
    let minute = (second + time.getMinutes()) / 60;
    let hour = (minute + time.getHours()) / 12;

    secondHand.style.setProperty('--rotation', second * 360)
    minuteHand.style.setProperty('--rotation', minute * 360)
    hourHand.style.setProperty('--rotation', hour * 360)
}

clockDate.innerText = date;
setInterval(setClock, 1000)