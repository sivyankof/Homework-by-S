// function sum(a, b) {
//   let sums = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     sums += arguments[i];
//     console.log (sums);
//   }
//   return sums
// };

function sum(a, b) {
    let sums = 0;
    for (let i in arguments) {
        sums += arguments[i];
    }
    return sums;
}

console.log(sum(2, 3, 4, 11, 12));
