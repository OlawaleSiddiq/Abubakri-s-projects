let restart = document.getElementById('restart')
let gameBoard = document.getElementById('gameBoard')
let cells = document.querySelectorAll('[data-cell]')
let message = document.getElementById('message')
let gameactive = true;
let winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let winningMessage = document.getElementById("winning-message")
let currentPlayer = 'x'

STARTGAME()
function STARTGAME() {
    newGame()
    cells.forEach(cell => {
        cell.addEventListener("click", handleClick, { once: true })
    })

}

function newGame() {
    message.style.setProperty('display', 'none')
    cells.forEach(cell => {
        cell.classList.remove('x')
        cell.classList.remove('o')
    })
}

function handleClick(e) {
    let cell = e.target;
    setMark(cell)
    endGame()
    changePlayer()
    boardHoverEffect()
}

function setMark(cell) {
    cell.classList.add(currentPlayer)
}

function endGame() {
    if (Win()) {
        winningMessage.textContent = `${currentPlayer} wins`
        message.style.setProperty('display', 'flex')

    } else if (draw()) {
        winningMessage.textContent = `Draw`
        message.style.setProperty('display', 'flex')
    }
}

function changePlayer() {
    currentPlayer = currentPlayer === 'x' ? 'o' : 'x'
}

function Win() {
    return winningConditions.some(condition => {
        return condition.every(index => {
            return cells[index].classList.contains(currentPlayer)
        })
    })
}

function draw() {
    return [...cells].every(cell => {
        return cell.classList.contains('x') || cell.classList.contains('o')
    })
}

function boardHoverEffect() {
    gameBoard.classList.remove('x')
    gameBoard.classList.remove('o')
    gameBoard.classList.add(currentPlayer)

}
restart.addEventListener('click', STARTGAME)