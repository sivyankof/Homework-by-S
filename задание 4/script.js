let users = [
    { name: `Ivan`, age: 18 },
    { name: `Petr`, age: 12 },
    { name: `Sidor`, age: 25 },
    { name: `Pavel`, age: 24 },
    { name: `Sasha`, age: 29 },
];

for (var i = 0; i < users.length; i++) {
    if (users[i].age < 18) {
        users.splice(i, 1);
        i--;
    }
}
console.log(users);

let smallUsers = users.filter((x) => x.age <= 18).sort((a, b) => b.age - a.age);
let odlUsers = users.filter((x) => x.age >= 18).sort((a, b) => b.age - a.age);

// console.log (smallUsers);
// console.log (odlUsers);
