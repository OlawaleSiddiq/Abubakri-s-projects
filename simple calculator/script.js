let equal = document.getElementById('equal')
let del = document.getElementById('DEL')
let ac = document.getElementById('AC')
let buttons = document.querySelectorAll('.keys')
let topScreen = document.getElementById('topScreen')
let lowerScreen = document.getElementById('lowerScreen')
let operands = document.querySelectorAll('operand')

//Adding the textcontent of  number buttons to the display screen on each click
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick)
})

//Adding the textcontent of operand buttons to the display screen on each click
operands.forEach(operand => {
    operand.addEventListener('click', (e) => {
        lowerScreen.textContent += e.target.textContent;
        lowerScreen.textContent = ""
    }, { once: true })
})

//checks for the mathematical logics to avoid error
function handleButtonClick(e) {
    let lastNumber = lowerScreen.textContent[lowerScreen.textContent.length - 1];
    let clickedButton = e.target;
    if (topScreen.textContent === "" && lowerScreen.textContent === "" && clickedButton.classList.contains('operand')) return;
    if (topScreen.textContent !== "" && lowerScreen.textContent === "" && !clickedButton.classList.contains('operand')) return;
    if (clickedButton.classList.contains('operand') && lastNumber === "/"   ) return
    if (clickedButton.classList.contains('operand') && lastNumber === "+") return
    if (clickedButton.classList.contains('operand') && lastNumber === "-") return
    if (clickedButton.classList.contains('operand') && lastNumber === "*") return
    if (lowerScreen.textContent.includes('.') && clickedButton.textContent === ".") return
    else { lowerScreen.textContent += clickedButton.textContent };

//the equal button checks for the required conditions to be met before performing any calculation. if not, it returns
    equal.addEventListener('click', function calc() {
        let lastNumber = lowerScreen.textContent[lowerScreen.textContent.length - 1];
        if (lastNumber === "+" || lastNumber === "*" || lastNumber === "-" || lastNumber === "/") return
        if (lowerScreen.textContent.length < 2) return;
        topScreen.textContent = eval(topScreen.textContent + lowerScreen.textContent)
        lowerScreen.textContent = ""
    }, { once: true });
    ac.addEventListener('click', clear);
    del.addEventListener('click', remove);
}
//clears the whole display screen when clicked
function clear() {
    topScreen.textContent = "";
    lowerScreen.textContent = "";
}

//deletes the last index on the display screen
function remove() {
    if (topScreen.textContent !== "" && lowerScreen.textContent !== "") {
        lowerScreen.textContent = lowerScreen.textContent.slice(0, lowerScreen.textContent.length - 1)
    } else if (topScreen.textContent === "" && lowerScreen.textContent !== "") {
        lowerScreen.textContent = lowerScreen.textContent.slice(0, lowerScreen.textContent.length - 1)
    } else {
        topScreen.textContent = topScreen.textContent.slice(0, topScreen.textContent.length - 1)
    }
}