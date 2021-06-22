const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let N;
let M;
let K;
let mines = [];
let counter = 0;

const makeMinesField = (N, M, mines) => {
  dx = [1, 1, 1, 0, 0, -1, -1, -1];
  dy = [-1, 0, 1, -1, 1, -1, 0, 1];

  const field = [];
  for (let i = 0; i <= N + 1; i += 1) {
    field[i] = [];
    for (let j = 0; j <= M + 1; j += 1) {
      field[i].push(0);
    }
  }

  // console.log('begin',field)
  for ([p, q] of mines) {
    // console.log('min',p,q)
    for (let i = 0; i < 8; i += 1) {
      field[p + dx[i]][q + dy[i]] += 1;
    }
  }

  for ([p, q] of mines) {
    field[p][q] = '*';
  }
  
  return field.map((arr) => arr.slice(1, -1)).slice(1, -1);
}

// rl.close();
rl.on('line', (string) => {
  if (counter === 0) {
    counter += 1;
    [N, M, K] = string.split(' ').flatMap(Number);
  } else {
    counter += 1;
    mines.push(string.split(' ').flatMap(Number));
  }
  if (counter === K + 1) {
    rl.close();
    console.log(makeMinesField(N, M, mines).map((el) => el.join(' ')).join('\n'));
  }
});


/*
I. Сапер

Ограничение времени	1 секунда
Ограничение памяти	64Mb
Ввод	стандартный ввод или input.txt
Вывод	стандартный вывод или output.txt
Вам необходимо построить поле для игры "Сапер" по его конфигурации – размерам и координатам расставленных на нем мин.
Вкратце напомним правила построения поля для игры "Сапер":
Поле состоит из клеток с минами и пустых клеток
Клетки с миной обозначаются символом *
Пустые клетки содержат число ki,j, 0≤ ki, j ≤ 8 – количество мин на соседних клетках.
Соседними клетками являются восемь клеток, имеющих смежный угол или сторону.
Формат ввода

В первой строке содержатся три числа: N, 1 ≤ N ≤ 100 - количество строк на поле, M, 1 ≤ M ≤ 100 -
количество столбцов на поле, K, 0 ≤ K ≤ N ⋅ M - количество мин на поле.
В следующих K строках содержатся по два числа с координатами мин: p, 1 ≤ p ≤ N - номер строки мины,
q, 1 ≤ 1 ≤ M - номер столбца мины.
Формат вывода

Выведите построенное поле, разделяя строки поля переводом строки, а столбцы - пробелом.
*/