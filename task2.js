var arr = [4, 1, 10, 25, 67, 87, 56];
var arr1 = [2, 5, 90, 4];

arr2 = arr1.concat(arr); // соединяем два массива
arr2.splice(arr2.indexOf(90), 1, 19, 2, 91); // ищем число 90, потом заменяем число 90 (с индексом 2) и подставляем набор чисел

console.log(arr2);

//------------------------------

let arr3 = arr2.slice(-4); // [25, 67, 87, 56]
arr3.sort();

arr2.sort((a, b) => b - a); 
let sumArr2 = arr2.reduce((sum, current) => sum + current, 0); // считаем сумму массива arr2 - сумма 373

console.log(arr2);
console.log(sumArr2);
