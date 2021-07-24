const fs = require("fs");
const dataArray = fs.readFileSync('./input.txt', 'utf8').trim().split('\n');
const [carCount, luckyNumber] = dataArray[0].split(' ').map(Number);
const carNumbers = dataArray[1].split(' ').map(Number);

// будем идти по списку чисел и накапливать сумму
const getLuckyNumberCount = (carCount, luckyNumber, carNumbers) => {
  let prefixSums = [0];
  for (let i = 0; i < carCount; i += 1) {
    prefixSums.push(prefixSums[i] + carNumbers[i]); 
  }
  // теперь идем по массиву полученных сумм, указатель на старт и на следующий элемент
  // если текущая сумма меньше счастливого числа, то мотрим следующую сумму
  // если равен, то увеличиваем счетчик
  // если больше, то начало сдвигаем вперед, пока элемент не меньше, потом сдвигаем текущий указатель
  let luckyNumberCount = 0;
  let startIndex = 0;
  let lastIndex = 0;
  while (lastIndex < carCount + 1) {
    let diff = prefixSums[lastIndex] - prefixSums[startIndex];
    if (diff < luckyNumber) {
      lastIndex += 1;
    } else if (diff === luckyNumber) {
      luckyNumberCount += 1;
      startIndex += 1;
      lastIndex += 1;
    } else {
      startIndex += 1;
    }
  }
  return luckyNumberCount;
}

console.log(getLuckyNumberCount(carCount, luckyNumber, carNumbers));

/*
B. Сумма номеров
Ограничение времени	1 секунда
Ограничение памяти	64Mb
Ввод	стандартный ввод или input.txt
Вывод	стандартный вывод или output.txt
Вася очень любит везде искать своё счастливое число 
K. Каждый день он ходит в школу по улице, вдоль которой припарковано N машин. 
Он заинтересовался вопросом, сколько существует наборов машин, стоящих подряд на местах с L до R, что сумма их номеров равна K.
Помогите Васе узнать ответ на его вопрос.
*/