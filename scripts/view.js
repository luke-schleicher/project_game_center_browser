var view = {

  getCell: function(coords) {
    var x = coords[0];
    var y = coords[1];
    return $('.row:nth-child('+y+')').find('.column:nth-child('+x+')');
  },

  paintCell: function(coords, className) {
    view.getCell(coords).addClass(className);
  }


};
