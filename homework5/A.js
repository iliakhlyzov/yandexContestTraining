const fs = require("fs");
const dataArray = fs.readFileSync('./input.txt', 'utf8').trim().split('\n');
const [n, m] = [dataArray[0], dataArray[2]].map(Number);
const shitsColourArray = dataArray[1].split(' ').map(Number);
const trousersColourArray = dataArray[3].split(' ').map(Number);


const findBestPairByColor = (n, shitsColourArray, m, trousersColourArray) => {
  // объявим мнимальную разницу
  let minDiff = +Infinity;
  // будем искать лучшую пару, в которой разница меньше, чем минимальная разница
  // если элемент из первого списка меньше, чем из второго, то читаем следующий элемент из первого, или наоборот
  let bestShirtIndex = 0;
  let bestTrouserIndex = 0;
  let i = 0;
  let j = 0;
  while (i < n && j < m) {
    const shitColour = shitsColourArray[i];
    const trouserColour = trousersColourArray[j];
    const localDiff = Math.abs(shitColour - trouserColour);
    if (localDiff < minDiff) {
      minDiff = localDiff;
      bestShirtIndex = i;
      bestTrouserIndex = j;
    }
    if (localDiff === 0) break;
    if (shitColour > trouserColour) {
      j += 1;
    } else {
      i += 1;
    }
  }
  return [shitsColourArray[bestShirtIndex], trousersColourArray[bestTrouserIndex]];
}

const bestPair = findBestPairByColor(n, shitsColourArray, m, trousersColourArray);
console.log(bestPair.join(' '));



/*

A. Стильная одежда
Ограничение времени	1 секунда
Ограничение памяти	64Mb
Ввод	стандартный ввод или input.txt
Вывод	стандартный вывод или output.txt
Глеб обожает шоппинг. Как-то раз он загорелся идеей подобрать себе майку и штаны так, чтобы выглядеть в них максимально стильно. В понимании Глеба стильность одежды тем больше, чем меньше разница в цвете элементов его одежды.

В наличии имеется N (1 ≤ N ≤ 100 000) маек и M (1 ≤ M ≤ 100 000) штанов, про каждый элемент известен его цвет (целое число от 1 до 10 000 000). Помогите Глебу выбрать одну майку и одни штаны так, чтобы разница в их цвете была как можно меньше.

Формат ввода
Сначала вводится информация о майках: в первой строке целое число N (1 ≤ N ≤ 100 000) и во второй N целых чисел от 1 до 10 000 000 — цвета имеющихся в наличии маек. Гарантируется, что номера цветов идут в возрастающем порядке (в частности, цвета никаких двух маек не совпадают).

Далее в том же формате идёт описание штанов: их количество M (1 ≤ M ≤ 100 000) и в следующей строке M целых чисел от 1 до 10 000 000 в возрастающем порядке — цвета штанов.

Формат вывода
Выведите пару неотрицательных чисел — цвет майки и цвет штанов, которые следует выбрать Глебу. Если вариантов выбора несколько, выведите любой из них.
*/