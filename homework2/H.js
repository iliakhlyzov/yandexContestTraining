const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let data = [];

const func = (coll) => {
  let [min2, min1, max3, max2, max1] = [Infinity, Infinity, -Infinity, -Infinity, -Infinity];
    for (let i = 0; i < coll.length; i += 1) {
      const current = coll[i];
      if (current > max1 ) {
        max3 = max2;
        max2 = max1;
        max1 = current;
      } else if (current > max2) {
        max3 = max2;
        max2 = current;
      } else if (current > max3) {
        max3 = current;
      }
      if (current < min2) {
        min1 = min2;
        min2 = current;
      } else if (current < min1) {
        min1 = current;
      }
      console.log(min2, min1, max3, max2, max1)
    }
    return min2 * min1 * max1 > max3 * max2 * max1
      ? [max1, min2, min1] : [max1, max2, max3];
}

// rl.close();
rl.on('line', (string) => {
  data = string.split(' ').flatMap(Number);
  rl.close();
  console.log(func(data).join(' '));
});

/*
alternative decision, b-search

const fast = (seq, left, right, k) => {
  let left = 0;
  let right = seq.length - 1;
  while (left < right) {
    let x = seq[Math.floor(right + left) / 2];
    let eqxfirst = left;
    let gtxfirst = left;
    for (let i = left; i < right; i += 1) {
      let now = seq[i];
      if (now === x) {
        seq[i] = seq[gtxfirst];
        seq[gtxfirst] = now;
      } else if (now < x) {
        seq[i] = seq[gtxfirst];
        seq[gtxfirst] = seq[eqxfirst];
        seq[eqxfirst] = now;
        gtxfirst += 1;
        eqxfirst +=1;
      }
    }
    if (k < eqxfirst) {
      right = eqxfirst - 1;
    } else if (k >= gtxfirst) {
      left = gtxfirst;
    } else {
      return;
    }
  }
}
*/

/*
H. Наибольшее произведение трех чисел

Ограничение времени	1 секунда
Ограничение памяти	64Mb
Ввод	стандартный ввод или input.txt
Вывод	стандартный вывод или output.txt
В данном списке из n ≤ 105 целых чисел найдите три числа,произведение которых максимально.
Решение должно иметь сложность O(n), где n - размер списка.
Выведите три искомых числа в любом порядке.

*/

