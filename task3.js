var users = [
   {id: 1, name: "Вася", age: 20},
    {id: 2, name: "Петя", age: 19},
    {id: 3, name: "Маша", age: 18}
];
users.push({id: 4, name: "Дима", age: 17});

for (i in users) {
   if (users[i].name == `Петя`){
      console.log (users[i].name);     // выведит users по имени Петя
   }
}

let sums = users.reduce((sum,current) => sum + current.age, 0);  //  выводит сумму всех age = 74

console.log (sums);console.log (sums);
