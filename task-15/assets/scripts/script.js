let users = document.querySelector(`h1`);
console.log(users);

let usersList = document.querySelector(`.users-list`);
console.log(usersList);

let names = document.querySelectorAll(`li`);
console.log(names);

let namesOdd = document.querySelectorAll(`li:nth-child(odd)`);
for (let el in namesOdd) {
    namesOdd[el].style = "color: red";
    setInterval(() => namesOdd[el].style = namesOdd[el].style = "color: blue", 2000);
    setInterval(() => namesOdd[el].style = namesOdd[el].style = "color: red", 4000);
}
console.log(namesOdd);

let namesEven = document.querySelectorAll(`li:nth-child(even)`);
for (let el in namesEven) {
    namesEven[el].style = "color: blue";
    setInterval(() => namesEven[el].style = namesEven[el].style = "color: red", 2000);
    setInterval(() => namesEven[el].style = namesEven[el].style = "color: blue", 4000);
}
console.log(namesEven);
