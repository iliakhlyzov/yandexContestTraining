const fs = require("fs");
const dataArray = fs.readFileSync('./input.txt', 'utf8').trim().split('\n');
const [n, r] = dataArray[0].split(' ').map(Number);
const distances = dataArray[1].split(' ').map(Number);

function fast(n, r, distances) {
  let count = 0;
  for (let i = 0, j = 0; i < n; i += 1) {
    while (distances[j] - distances[i] <= r && j < n) {
      j += 1;
    }
    if (j >= n) break;
    count += (n - j);
  }
  console.log(count);
};

fast(n, r, distances);