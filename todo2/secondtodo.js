let li = document.querySelectorAll('LI')
for (let i = 0; i < li.length; i++) {
    let span = document.createElement('span')
    span.className = 'close'
    let delbtn = document.createElement('button')
    delbtn.textContent = 'dlt'
    span.appendChild(delbtn)
    li[i].appendChild(span)

    let close = document.getElementsByClassName('close')
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            this.parentElement.remove()
        }
    }
}

let list = document.getElementById('my_ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked')
    }
})

function newElement() {
    let ul = document.getElementById('my_ul')
    let txt = document.getElementById('myinput').value
    let li = document.createElement('li')
    let t = document.createTextNode(txt)
    li.appendChild(t)
    let span = document.createElement('span')
    span.className = 'close'
    let delbtn = document.createElement('button')
    delbtn.textContent = 'dlt'
    span.appendChild(delbtn)
    li.appendChild(span)
    if (txt === "") {
        alert('Enter to-do item')
    } else {
        ul.appendChild(li)
    }
    document.getElementById('myinput').focus()
    document.getElementById('myinput').value = ""

    let close = document.getElementsByClassName('close')
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            this.parentElement.remove()
        }
    }

}
