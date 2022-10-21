class Tree {
    constructor(x, y, context) {
      this.treeImg = new Image();
      this.treeImg.src = './images/snowtree.png';
  
      this.x = x;
      this.y = y;
      this.speed = 1;
  
      this.treeSize = 132;
  
      this.context = context;
    }
  
    draw() {
      this.context.drawImage(this.treeImg, this.x - (this.treeSize / 2), this.y - ( this.treeSize / 2), this.treeSize, this.treeSize);
    }
  
    update() {
      this.x += this.speed;
    }
  }