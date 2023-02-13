let displayOne = document.querySelector('.displayOne')
let displayTwo = document.querySelector('.displayTwo')
let buttons = document.querySelectorAll('.btn')
let equalsbutton = document.getElementById("equals")
let deletbutton = document.querySelectorAll(".del")
let allClear = document.querySelector(".clear")
let operands = document.querySelectorAll(".operand")


allClear.onclick = function () {
    displayOne.textContent = ""
    displayTwo.textContent = ""
}

function del() {
    displayOne.textContent = displayOne.textContent.slice(0, displayOne.textContent.length - 1)
    if (displayOne.textContent === "") {
        displayTwo.textContent = displayTwo.textContent.slice(0, displayTwo.textContent.length - 1)
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // if (displayOne.textContent === "" && displayTwo.textContent !== "") {
        // }
        if (displayOne.textContent.includes('.') && button.textContent == '.') return
        else (displayOne.textContent += (button.textContent))
    })
})

operands.forEach(button => {
    button.addEventListener('click', () => {

        if (displayTwo.textContent !== "" && button.textContent == '+') {
            calculate()
            displayTwo.textContent += '+'
            return
        }
        if (displayTwo.textContent !== "" && button.textContent == '-') {
            calculate()
            displayTwo.textContent += '-'
            return
        }
        if (displayTwo.textContent !== "" && button.textContent == '*') {
            calculate()
            displayTwo.textContent += '*'
            return
        }
        if (displayTwo.textContent !== "" && button.textContent == '/') {
            calculate()
            displayTwo.textContent += '/'
            return
        }
        displayTwo.textContent += displayOne.textContent + (button.textContent)
        displayOne.textContent = ""
    })
})

function calculate() {
    displayTwo.textContent = eval(displayTwo.textContent.concat(displayOne.textContent))
    displayOne.textContent = ""
}

