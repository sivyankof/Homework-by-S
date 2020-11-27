// Фибоначи
let fibonachi = (n) => {
  if (n <= 1) {
    return n;
  } else {
    return fibonachi(n - 1) + fibonachi(n - 2);
  }
};

console.log(fibonachi(55));