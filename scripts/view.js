var view = {

  arrows: {
    37: { 
      key: 'l',
      opposite: 'r',
    },
    38: {
      key: 'u',
      opposite: 'd',
    },
    39: { 
      key: 'r',
      opposite: 'l',
    },
    40: {
      key: 'd',
      opposite: 'u',
    },    
  },

  buildBoard: function(gridSize) {
    for (var row = 0; row < gridSize; row++) {
      $('<div class="row">').appendTo('#game');
      for (var cell = 0; cell < gridSize; cell++) {
        $('<div class="cell">').appendTo('#game .row:last-child');
      }
    }
    $('#game').append('<p id="score">0</p>');
  },

  buildSnake: function(snake) {
    this.paintCell(snake.coords[0], snake.name);
    this.paintCell(snake.coords[1], snake.name);
  },

  buildFood: function(food) {
    view.paintCell(food.coords, food.name);
  },

  removeFood: function(coords) {
    view.paintCell(coords, 'food');
  },

  buildGame: function(model) {
    this.buildBoard(model.gridSize);
    this.buildSnake(model.snake);
    this.buildFood(model.food);
  },

  isLegalDirection: function(snake, keyNum) {
    return snake.facing !== this.arrows[keyNum]['opposite'];
  },

  isArrowKey: function(keyNum) {
    return this.arrows.hasOwnProperty(keyNum);
  },

  setDirectionListener: function(updateDirection, snake) {

    $(window).on('keydown', function(e) {

      var keyNum = e.keyCode;
      if (view.isArrowKey(keyNum) && view.isLegalDirection(snake, keyNum)) {
        updateDirection(view.arrows[keyNum]['key']);
      }
    });

  },

  getCell: function(coords) {
    var x = coords[0];
    var y = coords[1];
    return $('.row:nth-child(' + y + ')').find('.cell:nth-child(' + x + ')');
  },

  paintCell: function(coords, className) {
    view.getCell(coords).toggleClass(className);
  },

  updateScore: function(score) {
    $('#score').text(score);
  },

  endGame: function(score) {
    alert('Your snake died. Your score was ' + score +'.');
  },


};
