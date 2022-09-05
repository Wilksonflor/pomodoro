// variaveis
let comecar = document.getElementById('comecar')
let parar = document.getElementById('parar')

let workTime = 25
let breakTime = 5

let seconds = '00'

//display

window.onload = () => {
  document.getElementById('minutes').innerHTML = workTime
  document.getElementById('seconds').innerHTML = seconds

  comecar.classList.add('active')
}

function comecar() {
  //para mudar o tempo
  seconds = 59

  let workMinutes = workTime - 1
  let breakMinutes = breakTime - 1

  breakCount = 0

  let timerFunction = () => {
    //mudando o display
    document.getElementById('minutes').innerHTML = workMinutes
    document.getElementById('seconds').innerHTML = seconds

    //start
    seconds = seconds - 1
  }
  setInterval(timerFunction, 1000) //1000 = 1s;
}
