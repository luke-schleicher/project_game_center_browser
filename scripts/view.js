var view = {

  getCell: function(coords) {
    var x = coords[0];
    var y = coords[1];
    return $('.row:nth-child('+y+')').find('.column:nth-child('+x+')');
  },

  paintCell: function(coords, className) {
    view.getCell(coords).toggleClass(className);
  },

  getDirection: function(updateDirection) {
    var ARROWS = { 37: 'l', 38: 'u', 39: 'r', 40: 'd' };
    $(window).on('keydown', function(e) {
      if (ARROWS.hasOwnProperty(e.keyCode)) {
        updateDirection(ARROWS[e.keyCode]);
      }
    });
  },


};
