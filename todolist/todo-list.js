const nodelist = document.getElementsByTagName('li')
for (let i = 0; i < nodelist.length; i++) {
    let span = document.createElement('span')
    let t = document.createTextNode('x')
    span.appendChild(t)
    span.className = 'close'
    nodelist[i].appendChild(span)

}

const close = document.getElementsByClassName('close');
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    }
}


const addList = document.getElementById('addbtn');
addList.addEventListener('click', newElement)

function newElement() {
    let nodelist = document.createElement('li');
    let inputValue = document.getElementById('myinput').value;
    let txt = document.createTextNode(inputValue);
    nodelist.appendChild(txt)
    if (inputValue == "") {
        alert("Write something!")
    } else {
        document.getElementById('ul').appendChild(nodelist)
    }
    document.getElementById('myinput').value = "";
    document.getElementById('myinput').focus();


    let span = document.createElement('SPAN');
    let t = document.createTextNode('x')
    span.className = 'close'
    span.appendChild(t)
    nodelist.appendChild(span)
    

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            this.parentElement.remove()
        }
    }
}

var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
});