'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '¡Numero correcto!';
document.querySelector('.number').textContent = 19;
document.querySelector('.score').textContent = 19;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const initialMessage = `Empieza a adivinar...`;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  // Cuando pone un numero invalido
  if (!guess || guess > 20) {
    if (score > 1) {
      // document.querySelector('.message').textContent = `Número invalido`;
      displayMessage(`Número invalido`);

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = `Has perdido el juego`;
      displayMessage(`Has perdido el juego`);
      document.querySelector('.score').textContent = 0;
    }

    // Cuando el jugador gana
  } else if (guess === secretNumber) {
    if (score > 1) {
      document.querySelector('.number').textContent = secretNumber;
      // document.querySelector('.message').textContent = `¡Número Correcto!`;
      displayMessage(`¡Número Correcto!`);

      //  Cambiar estilos
      document.querySelector('body').style.backgroundColor = '#60b347';

      document.querySelector('.number').style.width = '30rem';

      //  Desactivar boton
      document.querySelector('.check').disabled = true;

      //  HighScore
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else {
      // document.querySelector('.message').textContent = `Has perdido el juego`;
      displayMessage(`Has perdido el juego`);
      document.querySelector('.score').textContent = 0;
    }

    //  Cuando escribe un número que es mayor o menor
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? `Número muy grande` : `Número muy pequeño`;
      displayMessage(
        guess > secretNumber ? `Número muy grande` : `Número muy pequeño`
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = `Has perdido el juego`;
      displayMessage(`Has perdido el juego`);
      document.querySelector('.score').textContent = 0;
    }
  }

  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = `Número muy grande`;
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = `Has perdido el juego`;
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // Cuando escribe un número más bajo que el secreto
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = `Número muy pequeño`;
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = `Has perdido el juego`;
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage(initialMessage);
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.check').disabled = false;
});
