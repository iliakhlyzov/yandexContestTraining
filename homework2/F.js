const readline = require('readline');
const { log } = console;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const data = [];

const func = (size, coll) => {
  // if (new Set(coll).size === 1) {
  //   return 0;
  // }
  let lastIndex = Math.floor((size - 1) / 2) - 1;
  let middle = lastIndex + 1;

  for (let i = 
    lastIndex, j = middle + 1; j < size;) {
    log('begin',lastIndex, j)
    if (coll[middle] === coll[j]) {
      j += 1;
    } else if (coll[i] !== coll[j]) {
      i = j - 1;
      lastIndex = coll[j - 1] === coll[j] ? j - 1 : j;
      middle = j;
      j += 1;
      
    } else {
      lastIndex = i;
      i -= 1;
      j += 1;
    } 
    log(i, j)
    log(lastIndex, middle)
  } 

  const array = coll.slice(0, lastIndex).reverse();
  if (array.length === 0) {
    return 0;
  }
  return [array.length, array.join(' ')].join('\n');
}

rl.on('line', (rawString) => {
  data.push(rawString);
  if (data.length === 2) {
    rl.close();
    const [sizeAsString, seqAsString] = data;
    const seq = seqAsString.split(' ').flatMap(Number);
    const size = Number(sizeAsString);
    log(func(size, seq));
  }
});

/*
F. Симметричная последовательность

Ограничение времени	1 секунда
Ограничение памяти	64Mb
Ввод	стандартный ввод или input.txt
Вывод	стандартный вывод или output.txt
Последовательность чисел назовем симметричной, если она одинаково читается как слева направо,
так и справа налево. Например, следующие последовательности являются
симметричными: 1 2 3 4 5 4 3 2 1 1 2 1 2 2 1 2 1 Вашей программе будет дана последовательность чисел.
Требуется определить, какое минимальное количество и каких чисел надо приписать в конец этой последовательности,
чтобы она стала симметричной.
Формат ввода

Сначала вводится число N — количество элементов исходной последовательности (1 ≤ N ≤ 100).
Далее идут N чисел — элементы этой последовательности, натуральные числа от 1 до 9.
Формат вывода

Выведите сначала число M — минимальное количество элементов, которое надо дописать к последовательности,
а потом M чисел (каждое — от 1 до 9) — числа, которые надо дописать к последовательности.
*/
