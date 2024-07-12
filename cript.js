let area = document.getElementById('area')
let cells = document.getElementsByClassName('cell')
let WhoWins = document.getElementById("whoWins")
let currentPlayer = document.getElementById('currenPl')

let roundHistory = []

let player = 'X'
let ai = 'O'

let stat = {
    'X': 0,
    'O': 0,
    'D': 0
}

let winCombination = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

for (let i = 1; i <= 9; i++) {
    area.innerHTML += `<div class='cell' pos="${i}"></div>`
}

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellonClick)
}


function cellonClick() {
    let data = []
    if (!this.innerHTML) {
        this.innerHTML = player
    } else {
        alert('ячейка бош эмес')
    }


    for (let i in cells) {
        if (cells[i].innerHTML == player)
            data.push(parseInt(cells[i].getAttribute('pos')))
    }

    if(checWinner(data)){
        stat[player]+=1
        WhoWins.innerHTML ='Win'+ [player]
        roundHistory.push(WhoWins.innerHTML)
        document.getElementById("roundHistory").innerHTML+=`win${player}`
        refresh()
    }else{
       let draw = true
       for(let i  in cells){
        if(cells[i].innerHTML=='')
            draw=false
          }

        if(draw){
            stat.D +=1
            WhoWins.innerHTML ='тен'
               roundHistory.push(WhoWins.innerHTML)
        document.getElementById("roundHistory").innerHTML+=` тен чыкты${player}`
        }
       
    }

    player = player === 'X' ? 'O' : "X"
    console.log(data)
}

function checWinner(data) {
    for (let i in winCombination) {
        let win = true
        for (let j in winCombination[i]) {
            let id = winCombination[i][j]
            let ind = data.indexOf(id)

            if (ind == -1) {
                win = false
            }
        }
        if (win) return true
    }
    return false
}

function refresh() {
    for(let i = 0; i < cells.length; i++){
        cells[i].innerHTML=''
    }
}