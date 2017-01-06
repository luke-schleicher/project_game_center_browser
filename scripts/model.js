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

  food: {
    coords: [2, 2],
    name: "food",
  },

  score: 0,
};
