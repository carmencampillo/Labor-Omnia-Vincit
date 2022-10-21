class Game {
  constructor(canvasElement, contextElement, screens, player, trees) {
    // Canvas references.
    this.canvas = canvasElement;
    this.canvasWidth = this.canvas.width;
    this.canvasHeight = this.canvas.height;
    this.context = contextElement;
    this.screens = screens;

    // Objects references.
    this.player = player;
    this.trees = trees;

    // Game logic.
    this.IsRunning = false;
  }

  displayScreen(name) {
    for (let screenName in this.screens) {
      this.screens[screenName].style.display = 'none';
    }

    this.screens[name].style.display = '';
  }

  gameStart() {
    this.displayScreen('playing');

    this.IsRunning = true;
    this.gameUpdate();
  }

  gameUpdate(stamp) {
    if (!this.IsRunning) return;

    if (Math.random() <= 0.007) {
      this.trees.push(new Tree(0, randomInt(0, this.canvasHeight), contextElement));
    }

    this.trees.forEach((tree) => {
      tree.update();

      if (
        this.player.x >= tree.x - tree.treeSize / 2 &&
        this.player.x <= tree.x + tree.treeSize / 2 &&
        this.player.y <= tree.y + tree.treeSize / 2 &&
        this.player.y >= tree.y - tree.treeSize / 2
      ) {
        this.IsRunning = false;
  
        this.displayScreen('end');
      }
    })

    this.gameDraw(stamp);

    window.requestAnimationFrame((stamp) => this.gameUpdate(stamp));
  }

  gameDraw(stamp) {
    this.context.clearRect(0, 0, canvasWidth, canvasHeight);

    this.player.draw();

    this.trees.forEach((tree) => {
      tree.draw();
    })
  }
}