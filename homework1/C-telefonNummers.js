const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const data = [];
const defaultCode = 495;

const parseToNumber = (rawString) => {
  const numberArray = [];
  for (let i = 0; i < rawString.length; i += 1) {
    const number = Number(rawString[i]);
    if (!isNaN(number)) {
      numberArray.push(number);
    }
  }

  const fullNumberArray = numberArray.length === 7
    ? [defaultCode, ...numberArray] : numberArray.slice(1);

  return Number(fullNumberArray.join(''));
}

rl.on('line', (rawString) => {
  const number = parseToNumber(rawString);
  data.push(number);
  if (data.length === 4) {
    rl.close();
    const [defaultNumber, ...numbers] = data;
    // console.log(data)
    const answer = numbers.map((number) => defaultNumber === number ? 'YES' : 'NO');
    console.log(answer.join('\n'));
  }
});

/*
C. Телефонные номера

Ограничение времени	1 секунда
Ограничение памяти	64Mb
Ввод	стандартный ввод или input.txt
Вывод	стандартный вывод или output.txt
Телефонные номера в адресной книге мобильного телефона имеют один из следующих форматов:
 +7<код><номер> 8<код><номер> <номер> где <номер> — это семь цифр, а <код> — это три цифры или три цифры в круглых скобках.
  Если код не указан, то считается, что он равен 495. Кроме того, в записи телефонного номера может стоять знак “-” 
  между любыми двумя цифрами (см. пример). На данный момент в адресной книге телефона Васи записано всего три телефонных номера,
   и он хочет записать туда еще один. Но он не может понять, не записан ли уже такой номер в телефонной книге. Помогите ему! 
   Два телефонных номера совпадают, если у них равны коды и равны номера. 
   Например, +7(916)0123456 и 89160123456 — это один и тот же номер.
Формат ввода

В первой строке входных данных записан номер телефона, который Вася хочет добавить в адресную книгу своего телефона.
 В следующих трех строках записаны три номера телефонов, которые уже находятся в адресной книге телефона Васи.
 Гарантируется, что каждая из записей соответствует одному из трех приведенных в условии форматов.
Формат вывода

Для каждого телефонного номера в адресной книге выведите YES (заглавными буквами), если он
совпадает с тем телефонным номером, который Вася хочет добавить в адресную книгу или NO (заглавными буквами) в противном случае.
*/
