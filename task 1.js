// отфильтровать массив, чтобы не повторялись значения массива
var arr = [1, 2, 3, 4, 4, 5, 2, 9, 4];

//первый сопсоб
var arrUnique = [...arr.filter((a, b) => a != b)];

//второй способ (нужно через reduce and indexOf)
var arrUnique1 = arr.reduce((sum, current) => sum != current, 0);

var arr = [1, 2, 3, 4, 4, 5, 2, 9, 4];
var arrUnique1 = arr.reduce((total, amount) => {
  if (amount !== total[total.indexOf(amount)]) {
    total.push(amount);
  }
  return total;
}, []);

console.log(arrUnique1);
