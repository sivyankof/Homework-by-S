function mul (n,m) {    //  Перемножение чисел с проверкой на ввод числа
  if ( Number(n) &&  Number(m)) {
    let x = 0
    x = n * m
    return  x
  } 
    return (`Введите число!`);
  }

let n = prompt (`Введите первое число`, ``);
let m = prompt (`Введите второе число`, ``);

// console.log(mul ( 3, 3));