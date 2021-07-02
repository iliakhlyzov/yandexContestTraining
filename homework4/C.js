const fs = require('fs');

const countWords = {};
let wordsThatMaxRepeat = [];
let maxCountOfOneWord = 0;

fs.readFileSync('./input.txt', 'utf8').trim().split('\n')
  .forEach((sentence) => sentence.trim().split(' ').forEach((raw) => {
    const word = raw.trim();
    if (countWords.hasOwnProperty(word)) {
      countWords[word] += 1;
    } else {
      countWords[word] = 1;
    }
    const count = countWords[word];
    if (count < maxCountOfOneWord) return;
    if (count === maxCountOfOneWord) {
      wordsThatMaxRepeat.push(word);
    } else {
      wordsThatMaxRepeat = [word];
      maxCountOfOneWord = count;
    }
  }));
  wordsThatMaxRepeat.sort();

console.log(wordsThatMaxRepeat[0])

/*
C. Самое частое слово
Ограничение времени	1 секунда
Ограничение памяти	64Mb
Ввод	стандартный ввод или input.txt
Вывод	стандартный вывод или output.txt
Дан текст. Выведите слово, которое в этом тексте встречается чаще всего. Если таких слов несколько, выведите то, которое меньше в лексикографическом порядке.

Формат ввода
Вводится текст.

Формат вывода
Выведите ответ на задачу.
*/