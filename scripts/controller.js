var controller = {

  init: function() {
    model.buildGame();
    view.buildGame(model);
    view.setDirectionListener(this.updateDirection, model.snake);
    this.loopInterval = setInterval(this.gameLoop, 120);
  },

  gameLoop: function() {

    // update snake model
    model.moveSnake();
    model.checkLife();
    var deadSnakeTail = model.checkSnakeTail();

    // check for death
    if (model.snake.dead) {
      clearInterval(controller.loopInterval);
      view.endGame(model.score);
      return false;
    }

    // update food model
    var currentCoords = model.updateFood(deadSnakeTail);
    if (currentCoords) {
      view.buildFood(model.food);
      view.removeFood(currentCoords);
    }

    // render the snake
    view.paintCell(model.snake.coords[0], model.snake.name);

    if (deadSnakeTail) {
      view.paintCell(deadSnakeTail, model.snake.name);
    }

    // render the score
    view.updateScore(model.score);

  },

  updateDirection: function(direction) {
    model.snake.facing = direction;
  }

};
