// C. Кубики

// Ограничение времени	1 секунда
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод	стандартный вывод или output.txt

// Аня и Боря любят играть в разноцветные кубики, причем у каждого из них свой набор и в каждом наборе все кубики различны по цвету. 
// Однажды дети заинтересовались, сколько существуют цветов таких, что кубики каждого цвета присутствуют в обоих наборах. 
// Для этого они занумеровали все цвета случайными числами. На этом их энтузиазм иссяк, поэтому вам предлагается помочь 
// им в оставшейся части. Номер любого цвета — это целое число в пределах от 0 до 10^9.
// Формат ввода

// В первой строке входного файла записаны числа N и M — количество кубиков у Ани и Бори соответственно. 
// В следующих N строках заданы номера цветов кубиков Ани. В последних M строках номера цветов кубиков Бори.

// Формат вывода

// Выведите сначала количество, а затем отсортированные по возрастанию номера цветов таких, что кубики каждого цвета есть в 
// обоих наборах, затем количество и отсортированные по возрастанию номера остальных цветов у Ани, потом количество и 
// отсортированные по возрастанию номера остальных цветов у Бори.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let counter = 0;
let end = 0;
let data = [];

const func = (data) => {
  const N = +data[0];
  // const M = +data[1];
  const cubesA = data.slice(2, N + 2);
  const cubesB = data.slice(N + 2);
  const set1 = new Set(cubesA);
  const set2 = new Set(cubesB);

  const getSets = (A, B) => {
    const diffAB = [];
    const diffBA = [];
    const intersection = [];
    new Set([...set1, ...set2]).forEach((element) => {
      if (!A.has(element)) {
        diffBA.push(+element)
      } else if (!B.has(element)) {
        diffAB.push(+element);
      } else {
        intersection.push(+element);
      }
    });
    return [intersection, diffAB, diffBA];
  };

  const [i, dAB, dBA] = getSets(set1, set2).map((set) => set.sort((x, y) => x - y));
  return [i.length, i.join(' '), dAB.length, dAB.join(' '), dBA.length, dBA.join(' ')];
}

const answer = func(data);

rl.on('line', (str) => {
  counter += 1;
  data.push(...str.split(' ').flatMap(Number));
  if (counter === 1) {
    end = data[0] + data[1] + 1;
  }
  if (counter === end) {
    rl.close();
    console.log(func(data).join('\n'));
  }
});


// console.log(func([4,3,0,1,10,9,1,3,0]));
// console.log(func([2, 2, 1, 2, 2, 3]));
// console.log(func([0,0]));
