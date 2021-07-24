const fs = require("fs");
const dataArray = fs.readFileSync('./input.txt', 'utf8').trim().split('\n');
const [n, k] = dataArray[0].split(' ').map(Number);
const trees = dataArray[1].split(' ').map(Number);


const newFunc = (n, k, trees) => {
  let firstColorIndex = 0;
  let firstColor = trees[firstColorIndex];
  const colors = {};

  let colorsCount = 0;
  let currentLength = -1;

  const getNextFirstColorIndex = (index) => {
    while (colors[trees[index]] !== index) {
      index += 1;
    }
    return index;
  }

  let i = 0;
  while (colorsCount !== k) {
    const color = trees[i];
    if (!colors.hasOwnProperty(color)) {
      colors[color] = i;
      currentLength += 1;
      colorsCount += 1;
    } else if (color === firstColor) {
      colors[color] = i;
      firstColorIndex = getNextFirstColorIndex(firstColorIndex + 1);
      firstColor = trees[firstColorIndex];
      currentLength = i - firstColorIndex;
    } else {
      colors[color] = i;
      currentLength += 1;
    }
    i += 1;
  }

  let startMinSeqIndex = firstColorIndex;
  let minLength = currentLength;

  while (i < n) {
    const color = trees[i];
    colors[color] = i;
    if (color === firstColor) {
      firstColorIndex = getNextFirstColorIndex(firstColorIndex + 1);
      firstColor = trees[firstColorIndex];
      currentLength = i - firstColorIndex;
      if (minLength > currentLength) {
        minLength = currentLength;
        startMinSeqIndex = firstColorIndex;
      }
    }
    i += 1;
  }

  console.log(startMinSeqIndex + 1, startMinSeqIndex + minLength + 1);
}

newFunc(n, k, trees);