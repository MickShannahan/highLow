


let numMax = 1000

let number = Math.round(Math.random() * numMax)

const cardElm = document.getElementById('card')
const numberElm = document.getElementById('number')
const guessesElm = document.getElementById('guesses')


numberElm.innerText = number.toString()
let highest = numMax + 1
let lowest = 0

function promptGuess() {
  let guess = parseInt(window.prompt("What number would you like to guess?"))
  if (Number.isNaN(guess)) return
  if (guess < number) {
    guessesElm.innerHTML += `<p>${guess} is too low ☝️</p>`
    console.log("number is too low");
  } else if (guess > number) {
    guessesElm.innerHTML += `<p>${guess} is too high 👇</p>`
    console.log("number is too high");
  } else {
    console.log("you win!");
    guessesElm.innerHTML += `<p class="text-success fw-bold">
      ${guess} is the number! 🎊
      <button class="btn btn-success" onclick="restart()">play again</button
     </p>`
    cardElm.classList.add('flipped')
  }
}

function guessNumber(guess) {

  if (guess > lowest && guess < number) lowest = guess
  if (guess < highest && guess > number) highest = guess

  console.log(lowest, highest);
  if (guess < number) {
    guessesElm.innerHTML += `<p>${guess} is too low ☝️</p>`
    console.log("number is too low");
  } else if (guess > number) {
    guessesElm.innerHTML += `<p>${guess} is too high 👇</p>`
    console.log("number is too high");
  } else {
    console.log("you win!");
    guessesElm.innerHTML += `<p class="text-success fw-bold">
      ${guess} is the number! 🎊
      <button class="btn btn-success" onclick="restart()">play again</button
     </p>`
    cardElm.classList.add('flipped')
  }
  drawButtons()
}

function drawButtons() {
  let buttons = ''
  for (let num = 1; num <= numMax; num++) {
    buttons += `<button ${num <= lowest || num >= highest ? 'disabled' : ''} class="guess-button text-primary" onclick="guessNumber(${num})">${num <= lowest || num >= highest ? '❌' : num}</button>`
  }
  document.getElementById('guess-buttons').innerHTML = buttons
}
drawButtons()

function restart() {
  cardElm.classList.remove('flipped')
  number = Math.round(Math.random() * numMax)
  lowest = 0
  highest = numMax + 1
  drawButtons()
  guessesElm.innerHTML = ''
  setTimeout(() => {
    numberElm.innerText = number.toString()
  }, 1000)
}