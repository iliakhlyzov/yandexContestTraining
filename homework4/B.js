const fs = require('fs');

const countOfWords = {};
const result = [];
const text = fs.readFileSync('./input.txt', 'utf8').trim();

if (text.length === 0) {
  console.log(0);
	return;
}

text.split('\n')
  .forEach((sentence) => sentence.split(' ').forEach((word) => {
    if (countOfWords.hasOwnProperty(word)) {
      countOfWords[word] += 1;
    } else {
      countOfWords[word] = 0;
    }
    result.push(countOfWords[word])
  }));

console.log(result.join(' '))

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