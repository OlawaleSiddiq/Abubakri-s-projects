let cells = document.querySelectorAll('.cell');
let gameState = ["", "", "", "", "", "", "", "", "",];
let display = document.getElementById('display');
let gameOn = true;
let currentPlayer = 'X'
let clickedCell
let winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
]

cells.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true })
})

function handleClick(e) {
    if (gameOn === false) return
    clickedCell = e.target;
    let clickedCellindex = parseInt(clickedCell.getAttribute('data-cell-index'))
    gameState[clickedCellindex] = currentPlayer;
    clickedCell.innerText = currentPlayer;
    handleWins()
    changePlayer()
}

function handleWins() {
    for (let i = 0; i < winningConditions.length; i++) {
        let condition = winningConditions[i]
        let a = gameState[condition[0]]
        let b = gameState[condition[1]]
        let c = gameState[condition[2]]
        if (a === "" || b === "" || c === "") continue
        if (a === b && b === c) {
            gameOn = false
            display.innerText = currentPlayer + ' Win!'
            setTimeout(gameEnd, 1500)
            return
        }
    }
    handleDraw()
}

function changePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
}
function handleDraw() {
    if (!gameState.includes("")) {
        display.innerText = "Draw Game"
        gameOn = false
        setTimeout(gameEnd, 1500)
        return
    }
}

function gameEnd() {
    let btn = document.createElement('button')
    btn.innerText = 'Restart'
    let div = document.createElement('div')
    div.id = 'restartDiv';
    div.append(btn)
    document.body.appendChild(div);

    btn.addEventListener('click', function () {
        document.body.removeChild(div);
        gameState = ["", "", "", "", "", "", "", "", "",];
        gameOn = true;
        cells.forEach(cell => {
            cell.removeEventListener('click', handleClick,)
            cell.innerText = ""
            display.innerText = ""
        })
        cells.forEach(cell => {
            cell.addEventListener('click', handleClick, { once: true })
        })

    })
}