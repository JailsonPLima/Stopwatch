// Selecionando as tags
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')
const milesemos = document.getElementById('milesemos')

const btnIniciarParar = document.getElementById('btniniciarparar')
const btnResetar = document.getElementById('resetar')

// Declarando Variáveis
let contador
let min = 0
let sec = 0
let mil = 0
let alternar = 1

const iniciarContator = () => {
  mil < 10 ? milesemos.innerHTML = `0${mil}` : milesemos.innerHTML = mil
  sec < 10 ? segundos.innerHTML = `0${sec}` : segundos.innerHTML = sec
  min < 10 ? minutos.innerHTML = `0${min}` : minutos.innerHTML = min

  mil++
  if (mil > 99) {
    sec++
    mil = 0
  }
  if (sec > 59) {
    min++
    sec = 0
  }
  if (min > 59) {
  }
}

const pararRetomarContador = () => {
  if (alternar == 1) {
    contador = setInterval(iniciarContator, 10)
    btnIniciarParar.innerHTML = "parar"
    btnResetar.disabled = true
    console.log('ligou')
    alternar = 0
  } else if (alternar == 0) {
    clearInterval(contador)
    btnIniciarParar.innerHTML = "retomar"
    btnResetar.disabled = false
    console.log('desligou')
    alternar = 1
  }
}

const resetarContador = () => {
  min = 0
  sec = 0
  mil = 0
  minutos.innerHTML = `0${min}`
  segundos.innerHTML = `0${sec}`
  milesemos.innerHTML = `0${mil}`
  btnIniciarParar.innerHTML = "iniciar"
  console.log('resetou')
}

// Eventos para os botões 
btnIniciarParar.addEventListener("click", pararRetomarContador)
btnResetar.addEventListener("click", resetarContador)