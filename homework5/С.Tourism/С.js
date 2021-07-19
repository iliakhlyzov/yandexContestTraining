const fs = require("fs");
const dataArray = fs.readFileSync('./input.txt', 'utf8').trim().split('\n');
const n = Number(dataArray[0]);
const points = dataArray.slice(1, n + 1).map((data) => data.trim().split(' ').map(Number));
const m = Number(dataArray[n + 1]);
const traces = dataArray.slice(n + 2).map((data) => data.trim().split(' ').map(Number));

// console.log(n, points, m, traces);
const slow = (n, points, m, traces) => {
  const rises = [0];
  for (let i = 1; i < n; i += 1) {
    const temp = []
    rises.push(points[i][1] - points[i - 1][1]);
  }
  const result = [];
  for (let i = 0; i < m; i += 1) {
    const [start, end] = [traces[i][0], traces[i][1]];
    if (start === end) {
      result.push([0]);
      continue;
    }
    let high = 0;
    if (start < end) {
      for (let j = start; j < end; j += 1) {
        if (rises[j] > 0) {
          high += rises[j];
        }
      }
    } else {
      for (let j = end; j < start; j += 1) {
        if (rises[j] < 0) {
          high += -rises[j];
        }
      }
    }
    result.push(high)
  }
  fs.writeFileSync('./output.txt', result.join('\n'));
  // console.log(result.join('\n'));
}

// slow(n, points, m, traces);

// будем записывать найденный максимум в сумму
function fast(n, points, m, traces) {
  const prefixSum = [0];
  const prefixMinus = [0];
  for (i = 1; i < n; i += 1) {
    const prevSum = prefixSum[i - 1];
    const prevMinus = prefixMinus[i - 1];
    const currentSum = points[i][1] - points[i - 1][1];
    prefixSum.push(currentSum > 0 ? currentSum + prevSum : prevSum);
    prefixMinus.push(currentSum < 0 ? -currentSum + prevMinus : prevMinus);
  }
  console.log(prefixSum, prefixMinus)
  const result = [];
  for (i = 0; i < m; i += 1) {
    const [start, end] = [traces[i][0], traces[i][1]];
    if (start === end) {
      result.push(0);
      continue;
    }
    if (start > end) {
      result.push(prefixMinus[start - 1] - prefixMinus[end - 1]);
    } else {
      result.push(prefixSum[end - 1] - prefixSum[start - 1]);
    }
  }
  fs.writeFileSync('./output.txt', result.join('\n'));
}

fast(n, points, m, traces);