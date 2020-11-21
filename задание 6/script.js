function sumAll(...args) { 
   let sum = 0;
 
   for (let i of args) 
   
    sum += i;
   x = sum / args.length;
   return x
  
 }

 console.log (sumAll(5,5,5));