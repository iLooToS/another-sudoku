const play = require('play-sound')();
const {
  read, solve, prettyBoard,
} = require('./sudoku.js');

play.play('./music/Bonobo.mp3');

const board = read(process.argv[2]);
console.table(solve(board));
prettyBoard(process.argv[3], process.argv[2]);
