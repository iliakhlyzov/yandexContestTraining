const fs = require('fs');

const languages = {};
const strings = fs.readFileSync('./input.txt', 'utf8').split('\n');
const childrenOfSchoolCount = Number(strings[0]);

for (let i = 1; i <= strings.length; i += 1) {
  const current = strings[i];
  if (current == Number(strings)) continue;
  languages[current] = languages[current] ? languages[current] + 1 : 1;
}

let max = 0;
let min = 0;
const languagesMax = [];
const languagesMin = [];
Object.values
Object.entries(languages).forEach(([name, count]) => {
  if (count ===)
})


console.log(func());


/*
I. Полиглоты

Ограничение времени	1 секунда
Ограничение памяти	64Mb
Ввод	стандартный ввод или input.txt
Вывод	стандартный вывод или output.txt
Каждый из N школьников некоторой школы знает Mi языков. Определите, какие
языки знают все школьники и языки, которые знает хотя бы один из школьников.
Формат ввода

Первая строка входных данных содержит количество школьников N. Далее идет N
чисел Mi, после каждого из чисел идет Mi строк, содержащих названия языков,
которые знает i-й школьник. Длина названий языков не превышает 1000 символов,
количество различных языков не более 1000. 1 ≤ N ≤ 1000, 1 ≤ Mi ≤ 500.
Формат вывода

В первой строке выведите количество языков, которые знают все школьники. Начиная
со второй строки - список таких языков. Затем - количество языков, которые знает
хотя бы один школьник, на следующих строках - список таких языков.

*/