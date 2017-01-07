var model = {

  gridSize: 7,

  grid: {
    top: 0,
    right: this.gridSize,
    bottom: this.gridSize,
    left: 0
  },

  snake: {
    coords: [[4, 4]],
    facing: "r",
    length: 2,
    name: "snake",
  },

  moveSnake: function() {

    var direction = this.snake.facing;
    var snakeHead = this.snake.coords[0];

    var newCoords = snakeHead.slice();
    if (direction === 'r') {
      newCoords[0]++;
    } else if (direction === 'l') {
      newCoords[0]--;
    } else if (direction === 'd') {
      newCoords[1]++;
    } else {
      newCoords[1]--;
    }
    this.snake.coords.unshift(newCoords);

    return this.snake.coords.pop();

  },

  // if 'r'
    // [++, ]

  // if 'l'
    // [--, ]

  // if 'u'
    // [, --]

  // if 'd'
    // [, ++]

  food: {
    coords: [2, 2],
    name: "food",
  },

  score: 0,

};
