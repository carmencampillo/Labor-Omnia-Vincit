// HTML elements.
const canvasElement = document.querySelector('canvas');
const contextElement = canvasElement.getContext('2d');
const canvasWidth = canvasElement.width;
const canvasHeight = canvasElement.height;
const startBtn = document.querySelector('#startBtn');
const tryAgainBtn = document.querySelector('#tryAgainBtn');
const startScreen = document.getElementById('start-screen');
const playingScreen = document.getElementById('playing-screen');
const endScreen = document.getElementById('end-screen');

const screens = {
  start: startScreen,
  playing: playingScreen,
  end: endScreen
};

// Game.
let trees = [new Tree(0, canvasHeight / 2, contextElement)];
let player = new Player(600, canvasHeight / 2, contextElement);
let game = new Game(canvasElement, contextElement, screens, player, trees);

function start() {
  game.gameStart();
}

function tryAgain() {
  game = new Game(canvasElement, contextElement, screens, player, [new Tree(0, canvasHeight / 2, contextElement)]);
  game.gameStart();
}

startBtn.addEventListener('click', () => {
  start();
});

tryAgainBtn.addEventListener('click', () => {
  tryAgain();
});

window.addEventListener('keypress', (e) => {
  e.preventDefault();
  switch (e.key) {
    case 'w':
      player.moveUp();
      break;
    case 's':
      player.moveDown();
      break;
  }
});
