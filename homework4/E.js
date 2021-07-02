const fs = require('fs');

const strings = fs.readFileSync('./input.txt', 'utf8').split('\n');
const n = Number(strings[0]);
const map = new Map();
let maxHeight = 0;
for (let i = 1; i <= n; i += 1) {
  const [width, height] = strings[i].split(' ').map(Number);
  const current = map.get(width);
  if (!current) {
    map.set(width, height);
    maxHeight += height;
  } else {
    if (current < height) {
      map.set(width, height);
      maxHeight += (height - current);
    }
  }
}
console.log(maxHeight)
// console.log(result.join('\n'))

// console.log(result.join('\n'))

/*
E. Пирамида
Ограничение времени	1 секунда
Ограничение памяти	64Mb
Ввод	стандартный ввод или input.txt
Вывод	стандартный вывод или output.txt
Для строительство двухмерной пирамиды используются прямоугольные блоки, каждый из которых характеризуется шириной и высотой. Можно поставить один блок на другой, только если ширина верхнего блока строго меньше ширины нижнего. Самым нижним в пирамиде может быть блок любой ширины. По заданному набору блоков определите, пирамиду какой наибольшей высоты можно построить из них.
Формат ввода
В первой строке входных данных задается число 
N < 100 000 — количество блоков 
В следующий N строках задаются пары натуральных чисел  — ширина и высота блока соответственно.

Формат вывода
Выведите одно целое число — максимальную высоту пирамиды.


*/