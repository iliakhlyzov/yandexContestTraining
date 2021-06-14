/* eslint no-console: "off" */

// A. Количество различных чисел

// Ограничение времени	1 секунда
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод	стандартный вывод или output.txt
// Дан список чисел, который может содержать до 100000 чисел. Определите, сколько в нем встречается различных чисел.
// Формат ввода

// Вводится список целых чисел. Все числа списка находятся на одной строке.
// Формат вывода

// Выведите ответ на задачу.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const invokeCount = 1;
let invokeCounter = 0;
const data = [];
const func = (arr) => new Set(arr).size;

// rl.close();

rl.on('line', (str) => {
  data.push(str.split(' ').map(Number));
  invokeCounter += 1;
  if (invokeCounter === invokeCount) {
    rl.close();
    console.log(func(...data));
  }
});
