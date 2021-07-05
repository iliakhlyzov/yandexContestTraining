const fs = require('fs');

// читаем текст из файла
const text = fs.readFileSync('./input.txt', 'utf8').trim();
if (text.length === 0) {
  console.log('');
  return;
}

// разбиваем текст на слова
const words = text.split('\n').flatMap((string) => string.trim().split(' ').flatMap((word) => word.trim()));

// проходим по каждому слову из текста и считаем сколько оно раз встречалось ранее и записываем
const countOfEveryWord = {};
const seqOfCountOfEveryWordBefore = [];
for (const word of words) {
  if (!countOfEveryWord.hasOwnProperty(word)) {
    countOfEveryWord[word] = 0;
  }
  seqOfCountOfEveryWordBefore.push(countOfEveryWord[word]);
  countOfEveryWord[word] += 1;
}

console.log(seqOfCountOfEveryWordBefore.join(' '));

/*

B. Номер появления слова
Ограничение времени	1 секунда
Ограничение памяти	64Mb
Ввод	стандартный ввод или input.txt
Вывод	стандартный вывод или output.txt
Во входном файле (вы можете читать данные из файла input.txt) записан текст. Словом считается последовательность непробельных символов идущих подряд, слова разделены одним или большим числом пробелов или символами конца строки. Для каждого слова из этого текста подсчитайте, сколько раз оно встречалось в этом тексте ранее.

Формат ввода
Вводится текст.

Формат вывода
Выведите ответ на задачу.
*/