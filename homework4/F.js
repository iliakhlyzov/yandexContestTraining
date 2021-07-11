const fs = require('fs');

const strings = fs.readFileSync('./input.txt', 'utf8').trim().split('\n');
const size = strings.length;
const customerNames = [];
const statistik = new Map();
for (let i = 0; i < size; i += 1) {
  const [customerName, productName, boughtCountAsString] = strings[i].split(' ');
  const boughtCount = Number(boughtCountAsString);
  if (!statistik.has(customerName)) {
    statistik.set(customerName, { [productName]: boughtCount });
    customerNames.push(customerName);
  } else {
    const customerProducts = statistik.get(customerName);
    if (customerProducts.hasOwnProperty(productName)) {
      customerProducts[productName] += boughtCount;
    } else {
      customerProducts[productName] = boughtCount;
    }
  }
}
const result = [];
customerNames.sort().forEach((customer) => {
  const data = statistik.get(customer);
  statistik.delete(customer);

  result.push(customer + ":");

  Object.keys(data).sort().forEach((key) => {
    result.push([key, data[key]].join(' '));
  });

})
console.log(result.join('\n'))

/*

F. Продажи
Ограничение времени	1 секунда
Ограничение памяти	64Mb
Ввод	стандартный ввод или input.txt
Вывод	стандартный вывод или output.txt
Дана база данных о продажах некоторого интернет-магазина.
Каждая строка входного файла представляет собой запись вида Покупатель товар количество, где Покупатель — имя покупателя
(строка без пробелов), товар — название товара (строка без пробелов), количество — количество приобретенных единиц товара.
Создайте список всех покупателей, а для каждого покупателя подсчитайте количество приобретенных им единиц каждого вида товаров.

Формат ввода
Вводятся сведения о покупках в указанном формате.

Формат вывода
Выведите список всех покупателей в лексикографическом порядке, после имени каждого покупателя выведите двоеточие,
затем выведите список названий всех приобретенных данным покупателем товаров в лексикографическом порядке,
после названия каждого товара выведите количество единиц товара, приобретенных данным покупателем. Информация
о каждом товаре выводится в отдельной строке.



*/