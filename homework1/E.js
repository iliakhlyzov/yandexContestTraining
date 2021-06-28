const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let data = [];

const func = (k1, m, k2, p2, n2) => {
  if (n2 > m) {
    return [-1, -1];
  }
  const f2 = (p2 - 1) * m + n2;

  if (f2 === 1) {
    if (k1 <= k2) {
      return [1, 1];
    } else if (m === 1) { 
      return [0, 1];
    } else if (m * k2 >= k1) {
      return [1, 0];
    }
    return [0, 0];
  }

  const minFlatCount = Math.ceil(k2 / f2);
  const maxFlatCount = Math.floor((k2 - 1) / (f2 - 1));
  console.log('flatCount', minFlatCount, maxFlatCount)
  if (minFlatCount > maxFlatCount) {
    return [-1, -1];
  }
  const f1min = Math.ceil(k1 / minFlatCount) % m;
  const f1max = Math.ceil(k1 / maxFlatCount) % m;

  const p1min = Math.ceil(k1 / (minFlatCount * m));
  const p1max = Math.ceil(k1 / (maxFlatCount * m));
  const n1min = f1min === 0 ? m : f1min;
  const n1max = f1max === 0 ? m : f1max;

  if (p1min === p1max && n1min === n1max) {
    return [p1min, n1min];
  } else if (p1min === p1max) {
    return [p1min, 0];
  } else if (n1min === n1max) {
    return [0, n1min];
  }
  return [0, 0];
};

// rl.close();
rl.on('line', (string) => {
  data = string.split(' ').flatMap(Number);
  rl.close();
  console.log(func(...data).join(' '));
});

/*
E. Скорая помощь

Ограничение времени	1 секунда
Ограничение памяти	64Mb
Ввод	стандартный ввод или input.txt
Вывод	стандартный вывод или output.txt
Бригада скорой помощи выехала по вызову в один из отделенных районов.
К сожалению, когда диспетчер получил вызов, он успел записать только адрес дома и номер квартиры K1,
а затем связь прервалась. Однако он вспомнил, что по этому же адресу дома некоторое время назад скорая
помощь выезжала в квартиру K2, которая расположена в подъезда P2 на этаже N2. Известно, что в доме M этажей
и количество квартир на каждой лестничной площадке одинаково. Напишите программу,
которая вычилсяет номер подъезда P1 и номер этажа N1 квартиры K1.
Формат ввода

Во входном файле записаны пять положительных целых чисел K1, M, K2, P2, N2. Все числа не превосходят 106.
Формат вывода

Выведите два числа P1 и N1. Если входные данные не позволяют однозначно определить P1 или N1, вместо соответствующего числа напечатайте 0. Если входные данные противоречивы, напечатайте два числа –1 (минус один).

*/