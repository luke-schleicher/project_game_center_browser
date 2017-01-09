var model = {

  gridSize: 16,

  grid: {
    top: 0,
    right: this.gridSize,
    bottom: this.gridSize,
    left: 0
  },

  snake: {
    coords: [[4, 4],[3,4]],
    facing: "r",
    length: 2,
    name: "snake",
    dead: false,
  },

  food: {
    coords: [2, 2],
    name: "food",
  },

  score: 0,


  hitWall: function() {
    var snakeHeadCoords = this.snake.coords[0];
    if (snakeHeadCoords[0] <= 0) {
      return true;
    } else if (snakeHeadCoords[1] <= 0) {
      return true;
    } else if (snakeHeadCoords[0] > this.gridSize) {
      return true;
    } else if (snakeHeadCoords[1] > this.gridSize) {
      return true;
    }
    return false;
  },

  hitSelf: function() {
    var coords = this.snake.coords;
    for (var i = 1; i < coords.length; i++) {
      var xSame = coords[0][0] === coords[i][0];
      var ySame = coords[0][1] === coords[i][1];
      if (xSame && ySame) {
        return true;
      }
    }
    return false;
  },

  checkLife: function() {
    if (this.hitWall() || this.hitSelf()) {
      this.snake.dead = true;
    }
  },

  checkSnakeTail: function() {
    var deadSnakeTail;
    if (this.snake.coords.length > this.snake.length) {
      deadSnakeTail = this.snake.coords.pop();
    } else {
      deadSnakeTail = null;
    }  
    return deadSnakeTail;
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

  },

  updateFood: function(deadSnakeTail) {
    var snakeCoords = this.snake.coords[0];
    var foodCoords = this.food.coords;
    var xSame = snakeCoords[0] === foodCoords[0];
    var ySame = snakeCoords[1] === foodCoords[1];

    if (xSame && ySame) {
      var currentCoords = this.food.coords;
      deadSnakeTail = false;
      this.snake.length++;
      this.score += 10;
      this.setFoodCoords();
      console.log(controller.loopInterval);
      return currentCoords;
    }
    return false;
  },

  setFoodCoords: function() {
    var coordsUnique = true;
    do  {
      var coords = this.randomCoords();
      var snakeCoords = this.snake.coords;
      for (var i = 0; i < snakeCoords.length; i++) {
        var xSame = coords[0] === snakeCoords[i][0];
        var ySame = coords[1] === snakeCoords[i][1];
        if (xSame && ySame) {
          coordsUnique = false;
          break;
        }  
      }
    } while (coordsUnique === false)
    this.food.coords = coords;
  },

  randomCoords: function() {
    var x = this.randomCoord();
    var y = this.randomCoord();
    return [x, y];
  },

  randomCoord: function() {
    return Math.floor(Math.random() * this.gridSize) + 1;
  },

  buildGame: function() {
    this.setFoodCoords();
  },

};
