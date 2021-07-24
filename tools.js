// чтение из файла 
const fs = require("fs");
const dataArray = fs.readFileSync('./input.txt', 'utf8').trim().split('\n');


const [n, k] = dataArray[0].split(' ').map(Number)