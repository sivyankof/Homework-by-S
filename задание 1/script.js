// function f (x) {
//    if (x == `` || x == undefined){
//       x = 0;
//    }
//    return x
// }

let f = (x) =>  ((x == `` || x == undefined) ? x = 0 : x)

console.log (f(undefined));  
console.log (f(0));
console.log (f(2));

  