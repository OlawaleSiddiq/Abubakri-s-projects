let cells = document.querySelectorAll('.cell')
let display = document.querySelector('.display')
let currentPlayer = 'o'
let gameState = ['', '', '', '', '', '', '', '', '',]
let gameActive = false;
let winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

cells.forEach(cell => {
    cell.addEventListener('click', start, { once: true })
})

function currentPlayerHandler() {
    return currentPlayer = currentPlayer === 'o' ? 'x' : 'o';
}

function start(e) {
    if (gameActive) return
    let clickedCell = e.target;
    let clickedcellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));
    clickedCell.classList.add(currentPlayer)
    gameState[clickedcellIndex] = currentPlayer;
    if (gameState.includes("") === false) {
        display.innerText = 'Draw'
        console.log('draw')
        gameActive = true
    }
    gameActive = handleWins()
    if(handleWins()){
        display.innerText = `${currentPlayer} Wins`
    }
    currentPlayerHandler()
}

function handleWins() {
    return winningConditions.some(condition => {
        return condition.every(index => {
            return cells[index].classList.contains(currentPlayer)

        })
    })
}


function restart() {
    cells.forEach(cell => {
        cell.removeEventListener('click', start)
        cell.classList.remove('o')
        cell.classList.remove('x')
        display.innerText = ''
    })
    gameActive = false;
    gameState = ['', '', '', '', '', '', '', '', '',]
    cells.forEach(cell => {
        cell.addEventListener('click', start, { once: true })
    })
}
document.getElementById('btn').addEventListener('click', restart)