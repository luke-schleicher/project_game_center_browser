var controller = {

  init: function() {
    view.paintCell(model.snake.coords, model.snake.name);
    view.paintCell(model.food.coords, model.food.name);
    controller.loopInterval = setInterval(controller.gameLoop, 1000);
  },

  gameLoop: function() {
    
  },

};

controller.init();
