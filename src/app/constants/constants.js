// the size of the board
// use square boards (don't fuck things up)
// if board is rectancle, bees may look funny :)
// you've been warned

const grid = {
  rows: 5,
  columns: 5
};


// the number of bees in the game
// (aligned from edges, never cenered)
const bees = 5;
const wasps = 5;

// generic stats of bees
const beeStats = {
  health: 100,
  attack: 30,
  defense: 30,
};

const beeQueenStats = {
  health: 100,
  attack: 50,
  defense: 50,
};

// generic stats of wasps
const waspStats = {
  health: 100,
  attack: 30,
  defense: 30,
};

const waspQueenStats = {
  health: 100,
  attack: 50,
  defense: 50,
};


export default {};
export {
  grid,
  bees,
  wasps,
  beeStats,
  beeQueenStats,
  waspStats,
  waspQueenStats,
};
