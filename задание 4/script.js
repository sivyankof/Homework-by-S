
function repeat(str,n) {
   if ( String(str) && Number (n) && n != null) {
    str = str + ` `;
    return str.repeat(n)
   } 
   return (`Введите правильные значение`)
  }

console.log (repeat ( `adqwdw`, 2));