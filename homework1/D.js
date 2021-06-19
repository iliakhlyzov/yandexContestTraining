const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const data = [];
const notSolution = "NO SOLUTION";
const manySolution = "MANY SOLUTIONS";

const func = (a, b, c) => {
  if (c < 0) return notSolution;
  if (a === 0) {
    if (b < 0) {
      return notSolution;
    } else {
      return c ** 2 === b ? manySolution : notSolution;
    }
  }
  const x = (c ** 2 - b) / a;
  return (a * x + b) < 0  || !Number.isInteger(x)
    ? notSolution : x;
};



// rl.close();
rl.on('line', (number) => {
  data.push(Number(number))
  if (data.length == 3) {
    rl.close();
    console.log(func(...data));
  }
});

/* 
D. Уравнение с корнем

  Ограничение времени	1 секунда
  Ограничение памяти	64Mb
  Ввод	стандартный ввод или input.txt
  Вывод	стандартный вывод или output.txt
  Решите в целых числах уравнение:
  sqrt(ax + b) = c;
  a, b, c – данные целые числа: найдите все решения или сообщите, что решений в целых числах нет.
  Формат ввода

  Вводятся три числа a, b и c по одному в строке.
  Формат вывода

  Программа должна вывести все решения уравнения в порядке возрастания, либо NO SOLUTION (заглавными буквами),
если решений нет. Если решений бесконечно много, вывести MANY SOLUTIONS.
*/

/*
 // if (c > 0) {
  //   // sqrt(ax + b) = c
  //   if (a === 0) {
  //     // x может быть любым
  //     // sqrt(b) = c
  //     // b = c ** 2
  //     if (b <= 0) {
  //       return notSolution;
  //     }
  //     if (b === c ** 2) {
  //       return manySolution;
  //     }
  //     return notSolution;
  //   }
  //   return (c ** 2 - b) / a;
  // }
  // // if (c > 0) return a === 0 ? notSolution : (c ** 2 - b) / a; // x = (c ** 2 - b) / a
  // // c = 0
  // if (a < 0) {
  //   // sqrt(ax - b) = 0; ax === b
  //   // x === b / a
  // }

  // if (a !== 0) {
  //   // sqrt(ax + b) = 0;
  //   if (b === 0) {
  //     // sqrt(ax) = 0;
  //     return 0;
  //   }
  //   // ax + b = 0;
  //   // x = -b / a;
  //   return b / a;
  // }
  // // a = 0;
  // // sqrt(b) = 0
  // if (b === 0) {
  //   return manySolution;
  // }
  // return notSolution;
  */