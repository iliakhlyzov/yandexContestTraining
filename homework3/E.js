const fs = require('fs');

const strings = fs.readFileSync('./input.txt', 'utf8').split('\n');
const digits = strings[0].split(' ');
const numberAsArray = strings[1].split('');
const missedDigits = new Set();

numberAsArray.forEach(digit => {
  if (!digits.includes(digit)) {
    missedDigits.add(digit);
  }
});

console.log(missedDigits.size);

/*
E. OpenCalculator

Ограничение времени	1 секунда
Ограничение памяти	64Mb
Ввод	стандартный ввод или input.txt
Вывод	стандартный вывод или output.txt
В новой программе OpenCalculator появилась новая возможность – можно настроить, какие кнопки отображаются, а какие – нет. Если кнопка не отображается на экране, то ввести соответствующую цифру с клавиатуры или копированием из другой программы нельзя. Петя настроил калькулятор так, что он отображает только кнопки с цифрами x, y, z. Напишите программу, определяющую, сможет ли Петя ввести число N, а если нет, то какое минимальное количество кнопок надо дополнительно отобразить на экране для его ввода.
Формат ввода

Сначала вводятся три различных числа из диапазона от 0 до 9: x, y и z (числа разделяются пробелами). Далее вводится целое неотрицательное число N, которое Петя хочет ввести в калькулятор. Число N не превышает 10000.
Формат вывода

Выведите, какое минимальное количество кнопок должно быть добавлено для того, чтобы можно было ввести число N (если число может быть введено с помощью уже имеющихся кнопок, выведите 0)

*/