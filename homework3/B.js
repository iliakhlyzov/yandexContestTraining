/* eslint no-console: "off", max-len: "off" */

// B. Пересечение множеств

// Ограничение времени	1 секунда
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод	стандартный вывод или output.txt
// Даны два списка чисел, которые могут содержать до 10000 чисел каждый. Выведите все числа, которые входят как в первый, так и во второй список в порядке возрастания. Примечание. И даже эту задачу на Питоне можно решить в одну строчку.
// Формат ввода

// Вводятся два списка целых чисел. Все числа каждого списка находятся на отдельной строке.
// Формат вывода

// Выведите ответ на задачу.

const fs = require('fs');
const assert = require('assert/strict');

const fileContent = fs.readFileSync('./input.txt', 'utf8');

const [arr1, arr2] = fileContent.toString().split('\n').map((el) => el.split(' '));

const func = (arr1, arr2) => {

  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const getIntersection = (array1, array2) => {
    const result = [];
    array1.forEach((element) => {

      if (array2.has(element)) {
        result.push(+element);
      }
    });
    return result;
  };

  const sortedUniqArray = getIntersection(set1, set2).sort((x, y) => x - y);
  return sortedUniqArray;
}

fs.writeFileSync('./output.txt', func(arr1, arr2).join(' '));


assert.deepEqual(func([1], [0]), []);
assert.deepEqual(func([1,2], [2,3]), [2]);
assert.deepEqual(func([3,2,1], [2,3,1]), [1,2,3]);
