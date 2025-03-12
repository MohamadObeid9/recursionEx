const fibonacci = (num: number): number => {
  return num < 2 ? num : fibonacci(num - 1) + fibonacci(num - 2);
};

const fibs = (num: number) => {
  const arr: number[] = [];
  for (let i = 0; i < num; i++) {
    arr.push(fibonacci(i));
  }
  return arr;
};

const fibsRec = (num: number, arr: number[] = []) => {
  if (num < 0) return [];
  else {
    fibonacci(num - 1) >= 0 ? arr.push(fibonacci(num - 1)) : arr.push();
    fibsRec(num - 1, arr);
  }
  return arr.reverse();
};

console.log(fibonacci(8)); // 21
console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
