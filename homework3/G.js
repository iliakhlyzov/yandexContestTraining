const fs = require('fs');

const strings = fs.readFileSync('./input.txt', 'utf8').split('\n');
const turtlesCount = Number(strings[0]);
const statements = [];
for (let i = 1; i <= turtlesCount; i += 1) {
  statements.push(strings[i].split(' ').map(Number));
}

const seqOfTurtles = [];
for (let i = 0; i < turtlesCount; i += 1) {
  seqOfTurtles.push(false);
}

const howManyTurtelsSayTrue = (turtlesCount, statements) => {
  let trueTurtelsCount = 0;

  statements.forEach(([aheadCount, behindCount], index) => {
    if (behindCount + 1 + aheadCount === turtlesCount && behindCount >= 0 && aheadCount >= 0) {
      if (!seqOfTurtles[behindCount]) {
        seqOfTurtles[behindCount] = true;
        trueTurtelsCount += 1;
      }
    }
  })

  return trueTurtelsCount;
};

console.log(howManyTurtelsSayTrue(turtlesCount, statements));


/* G. Черепахи

Ограничение времени	1 секунда
Ограничение памяти	64Mb
Ввод	стандартный ввод или input.txt
Вывод	стандартный вывод или output.txt
Широко известна следующая задача для младших школьников. Три черепахи ползут по дороге. Одна черепаха говорит: “Впереди меня две черепахи”. Другая черепаха говорит: “Позади меня две черепахи”. Третья черепаха говорит: “Впереди меня две черепахи и позади меня две черепахи”. Как такое может быть? Ответ: третья черепаха врет! По дороге одна за другой движутся N черепах. Каждая черепаха говорит фразу вида: “Впереди меня ai черепах, а позади меня bi черепах”. Ваша задача определить, сколько самое большее количество черепах могут говорить правду.
Формат ввода

В первой строке вводится целое число N (1 ≤ N ≤ 10000) строк, содержащих целые числа ai и bi, по модулю не превосходящие 10000, описывающие высказывание i-ой черепахи.
Формат вывода

Выведите целое число M – максимальное количество черепах, которые могут говорить правду.
*/