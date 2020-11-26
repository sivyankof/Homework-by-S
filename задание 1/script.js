// function f (x) {
//    if (x == `` || x == undefined){
//       x = 0;
//    }
//    return x
// }

function enterNumber() {
   return (arguments.length >= 1 ? 1 : 0)
}

console.log (enterNumber(undefined));  
console.log (enterNumber(0));
console.log (enterNumber(2));

//Проверка на введение числа, если есть число, выводит 1, если нет числа то 0  