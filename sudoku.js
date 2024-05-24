const fs = require("fs");
// function read() {
//   const { EOL } = require("os");
//   const board = fs.readFileSync("./puzzles.txt", "utf-8");
//   const boardSudoku = board.split(EOL);
//   const str = boardSudoku.map((el) => el.split(","));

//   return str;
//   /**
//    * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
//    */
// }
function read(num) {
  const read1 = fs.readFileSync("./puzzles.txt", "utf-8").split("\n");
  console.log(read1);
  const getSudoku = read1[num - 1].split("");

  const board = [];
  for (let i = 0; i < 9; i++) {
    board.push(getSudoku.slice(i * 9, (i + 1) * 9));
  }
  const number = board.map((row) =>
    row.map((el) => {
      if (el === "-") {
        return (el = null);
      }
      return Number(el);
    })
  );

  return number;
}
console.log(read(1));

function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
