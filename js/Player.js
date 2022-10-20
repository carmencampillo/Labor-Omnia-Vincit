class Player {
  constructor(x, y, context) {
    this.playerImg = new Image();
    this.playerImg.src = '../images/Pollito esquiando.jpeg';

    this.x = x;
    this.y = y;
    this.speed = 5;

    this.playerSize = 132;

    this.context = context;
  }

  draw() {
    this.context.drawImage(this.playerImg, this.x - (this.playerSize / 2), this.y - ( this.playerSize / 2), this.playerSize, this.playerSize);
  }

  moveUp() {
    this.y -= this.speed;
  }

  moveDown() {
    this.y += this.speed;
  }
}