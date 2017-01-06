var model = {

  gridSize: 7,

  grid: {
    top: 0,
    right: this.gridSize,
    bottom: this.gridSize,
    left: 0
  },

  snake: {
    coords: [4, 4],
    facing: "r",
    length: 2,
    name: "snake",
  },

  moveSnake: function() {

    var direction = this.snake.facing;
    var coords = this.snake.coords;

    if (direction === 'r') {
      coords[0]++;
    } else if (direction === 'l') {
      coords[0]--;
    } else if (direction === 'd') {
      coords[1]++;
    } else {
      coords[1]--;
    }

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
