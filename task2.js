var arr = [4, 1, 10, 25, 67, 87, 56];
var arr1 = [2, 5, 90, 4];

arr2 = arr1.concat(arr);
for (let i in arr2) {
  if (arr2[i] === 90) {
    arr2.splice(i, 1, 19, 2, 91); // получилось [2, 5, 19, 2, 91, 4, 4, 1, 10, 25, 67, 87, 56]
    console.log(arr2);
  }
}

console.log(arr2, `arr2`); // arr2 = [2, 5, 19, 2, 91, 4, 4, 1, 10, 25, 67, 87, 56]

let arr3 = arr2.slice(-4); // [25, 67, 87, 56]
arr3.sort();

arr2.sort((a, b) => b - a);
let sumArr2 = arr2.reduce((sum, current) => sum + current, 0); // сумма 373

console.log(arr2);
console.log(sumArr2);
