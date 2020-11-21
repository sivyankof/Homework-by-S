
let fio = [ {name: `Ivan`, age: 18} , 
{name: `Petr`, age: 12}, 
{name: `Sidor`, age: 25} , 
{name: `Pavel`, age: 24} , 
{name: `Sasha`, age: 29} ];


let adult = [];
let small = [];

for (let i = 0 ; i < fio.length; i++) {
if (fio[i].age >= 18) {
   adult.push(fio[i]);
} else {
small.push(fio[i]);
}
}

console.log (adult); // покажет совершеннолетних
console.log (small); // покажет малых

// const people = [
//    {name: 'Ivan', age: 18}, 
//    {name: 'Petr', age: 12}, 
//    {name: 'Sidor', age: 25}, 
//    {name: 'Pavel', age: 24}, 
//    {name: 'Sasha', age: 29}
//  ];
 
//  function split(arr) {
//    return [
//      arr.filter(man => man.age >= 18),
//      arr.filter(man => man.age < 18)
//    ];
//  }
 
//  console.log(split(people));