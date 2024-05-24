function read(num) {
  const fs = require('fs');
  const { EOL } = require('os');
  const read1 = fs.readFileSync('./puzzles.txt', 'utf-8').split(EOL);
  const getSudoku = read1[num - 1].split('');
  const board = [];
  for (let i = 0; i < 9; i++) {
    board.push(getSudoku.slice(i * 9, (i + 1) * 9));
  }
  const number = board.map((row) => row.map((el) => {
    if (el === '-') {
      return (el = null);
    }
    return Number(el);
  }));
  return number;
}
const board = read(process.argv[2]);

function solve(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === null) {
        for (let k = 1; k < 10; k++) {
          if (isSolved(board, i, j, k)) {
            board[i][j] = k;
            if (solve(board)) {
              return board;
            }
            board[i][j] = null;
          }
        }
        return false;
      }
    }
  }
  return board;
}
function isSolved(board, row, col, num) {
  for (let i = 0; i < board.length; i++) {
    if (board[i][col] === num || board[row][i] === num) {
      return false;
    }

    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;

    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (board[i][j] === num) {
          return false;
        }
      }
    }
    return true;
  }
}

function prettyBoard(phrase, fail) {
  const cowsay = require('cowsay');
  if (fail >= 16) {
    console.log(
      cowsay.think({
        text: 'ОГО, НУ И РЕШЕНИЕ У ТЕБЯ ПОЛУЧИЛОСЬ...',
        cow: 'SQUIRREL',
        e: 'oO',
        T: 'U ',
      }),
    );
    return;
  }
  if (phrase) {
    console.log(
      cowsay.think({
        text: phrase.toUpperCase(),
        cow: 'SQUIRREL',
        e: 'oO',
        T: 'U ',
      }),
    );
    return;
  }
  console.log(
    cowsay.think({
      text: 'ОГО, ТВОЕ РЕШЕНИЕ ВЫГЛЯДИТ ПРАВДОПОДОБНЫМ...',
      cow: 'SQUIRREL',
      e: 'oO',
      T: 'U ',
    }),
  );
}

module.exports = {
  read,
  solve,
  isSolved,
  prettyBoard,
};
