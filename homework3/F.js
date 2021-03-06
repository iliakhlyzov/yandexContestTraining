const fs = require('fs');

const strings = fs.readFileSync('./input.txt', 'utf8').split('\n');
const genom1 = strings[0];
const genom2 = strings[1];

const func = (genom1, genom2) => {
  const basis1 = {};
  const takenPairs = {};
  let proximity = 0;

  for (let i = 0; i < genom1.length - 1; i += 1) {
    const pair = `${genom1[i]}${genom1[i + 1]}`;
    basis1[pair] = basis1[pair] ? basis1[pair] + 1 : 1; 
  }

  for (let i = 0; i < genom2.length - 1; i += 1) {
    const pair = `${genom2[i]}${genom2[i + 1]}`;
    if (basis1[pair] && !takenPairs[pair]) {
      takenPairs[pair] = true;
      proximity += basis1[pair];
    }
  }
  return proximity;
}

console.log(func(genom1, genom2));

/*
F. Инопланетный геном

Ограничение времени	1 секунда
Ограничение памяти	64Mb
Ввод	стандартный ввод или input.txt
Вывод	стандартный вывод или output.txt
Геном жителей системы Тау Кита содержит 26 видов оснований, для обозначения которых будем
использовать буквы латинского алфавита от A до Z, а сам геном записывается строкой из латинских букв.
Важную роль в геноме играют пары соседних оснований, например, в геноме «ABBACAB» можно выделить следующие
пары оснований: AB, BB, BA, AC, CA, AB.
Степенью близости одного генома другому геному называется количество пар соседних оснований первого генома,
которые встречаются во втором геноме.
Вам даны два генома, определите степень близости первого генома второму геному. Программа получает на вход
две строки, состоящие из заглавных латинских букв. Каждая строка непустая, и её длина не превосходит 105.
Программа должна вывести одно целое число – степень близости генома, записанного в первой строке, геному,
записанному во второй строке.
Пример

Ввод Скопировать ввод	Вывод Скопировать вывод
ABBACAB
BCABB
4
Примечания

Следующие пары оснований первого генома встречаются во втором геноме: AB, BB, CA, AB. Обратите внимание на то, что пара AB в первом геноме встречается два раза, поэтому и подсчитана в ответе два раза.
Система оценивания:
Решение, правильно работающее только для случаев, когда длины данных строк не превосходят 100, будет оцениваться в 60 баллов.
*/