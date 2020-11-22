// function f (x) {
//    if (x == `` || x == undefined){
//       x = 0;
//    }
//    return x
// }

function f() {
   return (arguments.length >= 1 ? 1 : 0)
}

console.log (f(undefined));  
console.log (f(0));
console.log (f(2));

  