let time = document.getElementById('realclock')
function showtime() {
    let session = 'AM'
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    if (h > 12) {
        h = h - 12
        session = 'PM'
    }
    if (h === 0) {
        h = 12
    }
    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;

    time.innerText = h + ":" + m + ":" + s
    setTimeout(showtime, 1000);

}
showtime()