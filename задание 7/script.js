
function words(n) {
  let texts = ['товар', 'товара', 'товаров'];
  let n1 = Math.abs(n) % 100; 
  let n2 = n % 10;
  if (n1 > 10 && n1 < 20) { return `${n} ${texts[2]}` }
  if (n2 > 1 && n2 < 5) { return `${n} ${texts[1]}` }
  if (n2 == 1) { return `${n} ${texts[0]}` }
  return `${n} ${texts[2]}`};

console.log (words(2));
