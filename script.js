// Variáveis
const cookie = document.querySelector("#cookie")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const resetButton = document.querySelector("#resetButton")
let randomPhrase = Math.round(Math.random() * 10)

// Frases
let phrases = [
  "Você é mais forte do que imagina.",
  "O sucesso é uma escolha, escolha ser bem-sucedido.",
  "Não desista, a vitória está logo ali.",
  "Você é capaz de alcançar seus sonhos.",
  "Tudo é possível se você acredita.",
  "Se você quer algo, vá atrás dele.",
  "O fracasso é apenas uma oportunidade para recomeçar com mais inteligência.",
  "Não importa o quão lento você vá, desde que não pare.",
  "A determinação é a chave do sucesso.",
  "Não importa o que aconteça, nunca desista dos seus sonhos.",
  "É em meio a dificuldade que se encontra a oportunidade"
  ]

// Função para abrir o biscoito 
function openCookie() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
  newPhrase()
}
cookie.addEventListener("click", openCookie)

function resetCookie() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
  randomPhrase = Math.round(Math.random() * 10)
}
resetButton.addEventListener("click", resetCookie)

function newPhrase() {
  document.querySelector(".screen2 p").innerText = phrases[randomPhrase]
}