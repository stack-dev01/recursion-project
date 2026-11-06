function fibs(n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    if (i < 2) {
      result.push(i);
    } else {
      result.push(/* your sum here */);
    }
  }

  return result;
}

console.log(fibs(8));

function fibsRec(n) {
  console.log("This was printed recursively");

  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const prev = fibsRec(n - 1);
  prev.push(prev[prev.length - 1] + prev[prev.length - 2]);

  return prev;
}

console.log(fibsRec(8));