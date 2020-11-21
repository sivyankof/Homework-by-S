function discri (a, b, c) {
  if (  Number.isNaN(a) || a === null || 
        Number.isNaN(b) || b === null ||
        Number.isNaN(c) || c === null    ){
    console.log (`Введите число`);
  } else {
  let Dis = (b ** 2) - (4 * a * c);
    console.log (`Дискриминант =`,Dis);
  if ( Dis > 0 ) {
    console.log (`D > 0 `);
      x1 = (- b + Math.sqrt(Dis)) / (2 * a);
    console.log (`То x1 = `,x1);
       x2 = (- b - Math.sqrt(Dis)) / (2 * a);
    console.log (`То x2 =`,x2);
      return (`Выводим х1 = ` + `${x1}` + `, ` + `и х2 = ` + `${x2}` + ` два корня`);
  } else if (Dis == 0) {
     console.log (`D = 0 `);
      x = (- b )/ (2 * a);
    console.log (x);
      return (`Выводим х = ` + `${x}`+ ` один корень`);
  } else if ( Dis < 0 ) {
      return console.log (`D < 0, нет корней`);
  }
}
} 
console.log (discri( 23, 23, 49));




// ax² + bx + c = 0 (общий вид уравнения)

// 		D = b2 – 4ac

// 		D > 0                 Если больше 0
// 		x1 = (-b + √D ) / 2a
// 		x2 = (-b – √D ) / 2a

// 		D = 0                 Если равен  0
// 		x = -b / 2a

// 		D < 0 -             прекращаем решать уравнение;


// let sum1 = a * (x1 ** 2) + (b * x1) + c;
  // console.log (`сумма x1`, sum1);
  // let sum2 = a * (x2 ** 2) + (b * x2) + c;
  // console.log (`сумма x2`, sum2);