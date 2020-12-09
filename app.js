let player
let computer
let winStreak = 0

const choices = {
  rock: {
    name: 'rock',
    rock: 'TIE',
    spock: 'YOU LOST',
    paper: 'YOU LOST',
    lizard: 'YOU WIN!',
    scissors: 'YOU WIN!',
    img: 'https://images.homedepot-static.com/productImages/94af8836-0338-4802-914e-04cc71e562ad/svn/backyard-x-scapes-fake-rocks-hdd-rof-rocsb-64_1000.jpg'
  },
  paper: {
    name: 'paper',
    paper: 'TIE',
    rock: 'YOU WIN!',
    spock: 'YOU WIN!',
    lizard: 'YOU LOST!',
    scissors: 'YOU LOST',
    img: 'https://nyc3.digitaloceanspaces.com/aph/app/uploads/2019/04/26160704/1-04851-00_BL_Notebook_Paper_Punch_G-600x735.jpg'
  },
  scissors: {
    name: 'scissors',
    scissors: 'TIE',
    paper: 'YOU WIN!',
    lizard: 'YOU WIN!',
    spock: 'YOU LOST',
    rock: 'YOU LOST',
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Pair_of_scissors_with_black_handle%2C_2015-06-07.jpg'
  },
  lizard: {
    name: 'lizard',
    lizard: 'TIE',
    rock: 'YOU LOST',
    paper: 'YOU WIN!',
    scissors: 'YOU LOST',
    spock: 'YOU WIN!',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Young_Common_Wall_Lizard_%28Podarcis_muralis%29.png/1200px-Young_Common_Wall_Lizard_%28Podarcis_muralis%29.png'
  },
  spock: {
    name: 'spock',
    spock: 'TIE',
    rock: 'YOU WIN!',
    paper: 'YOU LOST',
    scissors: 'YOU WIN!',
    lizard: 'YOU LOST!',
    img: 'https://www.writeups.org/wp-content/uploads/Spock-Star-Trek-Leonard-Nimoy.jpg'
  }
}

function drawChoices () {
  let choiceNames = Object.keys(choices)
  let buttons = ''
  choiceNames.forEach(choice => {
    buttons += `<button class="btn btn-outline-dark p-3 m-2" onclick="playerChoice('${choice}')">${choice.toUpperCase()}</button>`
  })
  document.getElementById('buttons').innerHTML = buttons
}

function playerChoice (choice){
  player = choice
  computer = ''
  document.getElementById('computerimg').innerHTML = ''
  document.getElementById('computerchoice').innerText = computer.toUpperCase()
  document.getElementById('winner').innerText = ''
  document.getElementById("playerchoice").innerText = player.toUpperCase()
  document.getElementById('playerimg').innerHTML = `<img src="${choices[player].img}"></img>`
}

function computerChoice (){
  let number = Math.floor(Math.random() * 5)
  if(number == 0){
    computer = 'rock'
  } else if (number == 1){
    computer = 'paper'
  } else if(number == 2){
    computer = 'scissors'
  } else if(number == 3){
    computer = 'lizard'
  } else {
    computer = 'spock'
  }
  document.getElementById('computerchoice').innerText = computer.toUpperCase()
  document.getElementById('computerimg').innerHTML = `<img src="${choices[computer].img}"></img>`
}

function determineWinner () {
  computerChoice()
  document.getElementById('winner').innerText = choices[player][computer]
  if(choices[player][computer] == 'YOU WIN!'){
    winStreak++
    document.getElementById('winstreak').innerText = winStreak.toString()
  } else {
    winStreak= 0
    document.getElementById('winstreak').innerText = winStreak.toString()
  }
}


drawChoices()