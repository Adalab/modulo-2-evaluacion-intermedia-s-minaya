"use strict";

// SECCIÓN QUERY SELECTOR //
const selectEl = document.querySelector(".js_selectEl");
const playBtn = document.querySelector(".js_playBtn");
const messageEl = document.querySelector(".js_messageEl");
const playerScoreEl = document.querySelector(".js_playerScoreEl");
const computerScoreEl = document.querySelector(".js_computerScoreEl");
const roundInfoEl = document.querySelector(".js_roundInfoEl");

// SECCIÓN FUNCIONES //
function getRandomNumber(max) {
  return 1 + parseInt(Math.random() * max);
}

// Variables para guardar puntos

let playerPoints = 0;
let computerPoints = 0;
let roundsPlayed = 0;

// SECCIÓN EVENTOS //
playBtn.addEventListener("click", (ev) => {
  const playerMove = selectEl.value;

  // Numero aleatorio computer

  const randomNumber = getRandomNumber(9);

  let computerMove = "";

  if (randomNumber <= 3) {
    computerMove = "Piedra";
  } else if (randomNumber >= 7) {
    computerMove = "Papel";
  } else {
    computerMove = "Tijera";
  }

  // Comparar jugadas

  let result = "";

  if (playerMove === computerMove) {
    result = "Empate";
  } else if (
    (playerMove === "Piedra" && computerMove === "Tijera") ||
    (playerMove === "Papel" && computerMove === "Piedra") ||
    (playerMove === "Tijera" && computerMove === "Papel")
  ) {
    result = "¡Has ganado!";
    playerPoints += 1;
  } else {
    result = "¡Has perdido!";
    computerPoints += 1;
  }
  roundsPlayed += 1;

  // ACCIONES //
  messageEl.innerHTML = `${result} Tú: ${playerMove} | PC: ${computerMove}`;
  playerScoreEl.innerHTML = `Jugador: ${playerPoints}`;
  computerScoreEl.innerHTML = `PC: ${computerPoints}`;

  // Terminar juego tras 10 rondas

  if (roundsPlayed === 10) {
    playBtn.classList.add("collapsed");

    if (playerPoints > computerPoints) {
      messageEl.innerHTML = `Fin del juego: ¡Has ganado!`;
    } else if (computerPoints > playerPoints) {
      messageEl.innerHTML = `Fin del juego: ¡Has perdido!`;
    } else {
      messageEl.innerHTML = `Fin del juego: ¡Empate!`;
    }
  }
});
