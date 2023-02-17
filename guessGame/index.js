let btn = document.querySelector('button')
let input = document.querySelector('input')
let history = document.querySelector('.history')
let counter = document.querySelector('.counter')
let messageDisplay = document.querySelector('.messageDisplay')
let historyRecord = []
let chances = 10;
let random = () => Math.floor(Math.random() * 6)


function guess() {
    if (input.value === "") {
        input.focus()
        messageDisplay.textContent = 'Input Your Lucky Number.... Guess!';
        return
    }

    if (parseInt(input.value) === random()) {
        chances++;
        messageDisplay.textContent = 'Hooray!!!, you got the correct number';
    } else {
        messageDisplay.textContent = 'Ooopss!!!, you got the wrong number. try again.'
    }

    historyRecord.push(input.value)
    history.innerText = historyRecord
    chances--;
    counter.innerText = chances;
    input.value = "";
    input.focus()
    endGame()

}

function endGame() {
    if (chances < 1) {
        messageDisplay.textContent = 'Game Over'
        // input.setAttribute('disabled', "");
        // btn.setAttribute('disabled', '');
        document.querySelector('.restartDiv').style.display = 'flex';
    }
}

function restartGame() {
    input.value = "";
    input.focus();
    messageDisplay.textContent = 'Try your luck'
    historyRecord = [];
    history.innerText = ""
    chances = 10;
    counter.innerText = chances;
    document.querySelector('.restartDiv').style.display = 'none';
}
document.querySelector('.restart').addEventListener('click', restartGame)
btn.addEventListener('click', guess)