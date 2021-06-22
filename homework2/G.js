const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let data = [];

const makeSortArr = (el1, el2) => {
  if (el1 > el2) {
    return [el2, el1];
  }
  return [el1, el2];
}

const func = (coll) => {
    let maxArr = makeSortArr(coll[0], coll[1]);
    let minArr = maxArr;
    for (let i = 2; i < coll.length; i += 1) {
      const value = coll[i];
      if (value > maxArr[0]) {
        maxArr = value > maxArr[1]
        ? [maxArr[1], value] : [value, maxArr[1]];
      } else if (value < minArr[1]) {
        minArr = value < minArr[0]
          ? [value, minArr[0]] : [minArr[0], value];
      }
    }
    const max1 = maxArr[0] * maxArr[1];
    const max2 = minArr[0] * minArr[1];

    return max1 > max2 ? maxArr : minArr;
}

// rl.close();
rl.on('line', (string) => {
  data = string.split(' ').flatMap(Number);
  rl.close();
  console.log(func(data).join(' '));
});

/*
G. Наибольшее произведение двух чисел

Ограничение времени	1 секунда
Ограничение памяти	64Mb
Ввод	стандартный ввод или input.txt
Вывод	стандартный вывод или output.txt
Дан список, заполненный произвольными целыми числами.
Найдите в этом списке два числа, произведение которых максимально. Выведите эти числа в порядке неубывания.
Список содержит не менее двух элементов. Числа подобраны так, что ответ однозначен.
Решение должно иметь сложность O(n), где n - размер списка.
*/