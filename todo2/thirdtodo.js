let li = document.querySelectorAll('li')
for (let i = 0; i < li.length; i++) {
    let span = document.createElement('span')
    span.className = "close"
    let dltbtn = document.createElement('button')
    dltbtn.innerText = 'Dlt'
    span.appendChild(dltbtn)
    li[i].appendChild(span)

    let close = document.getElementsByTagName('span')
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            this.parentElement.remove()
        }
    }
}
let ul = document.querySelector('ul')
ul.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') { e.target.classList.toggle('checked') }
})

function newElement() {
    let myinput = document.getElementById('myinput').value
    let txt = document.createTextNode(myinput)
    let li = document.createElement('li')
    let span = document.createElement('span')
    span.className = "close"
    let dltbtn = document.createElement('button')
    dltbtn.innerText = 'Dlt'
    span.appendChild(dltbtn)
    li.appendChild(txt)
    li.appendChild(span)
    if (myinput === "") {
        alert('Enter to-do item to add')
    } else {
        document.querySelector('ul').appendChild(li)
    }
    document.getElementById('myinput').value = ""
    document.getElementById('myinput').focus()
    let close = document.getElementsByTagName('span')
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            this.parentElement.remove()
        }
    }
}