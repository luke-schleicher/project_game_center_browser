var controller = {

  init: function() {
    view.paintCell(model.snake.coords[0], model.snake.name);
    view.paintCell(model.food.coords, model.food.name);
    view.getDirection(this.updateDirection);
    controller.loopInterval = setInterval(controller.gameLoop, 1000);
  },

  gameLoop: function() {

    // check death conditions



    // update snake model
    var deadSnakeTail = model.moveSnake();

    // render the snake
    view.paintCell(model.snake.coords[0], model.snake.name);
    view.paintCell(deadSnakeTail, model.snake.name);

    // update food model
    // render the food

  },

  updateDirection: function(direction) {
    model.snake.facing = direction;
  }

};

controller.init();
