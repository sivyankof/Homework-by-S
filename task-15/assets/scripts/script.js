let users = document.querySelector(`h1`);
console.log(users);

let usersList = document.querySelector(`.users-list`);
console.log(usersList);

let names = document.querySelectorAll(`li`);
console.log(names);

let namesOdd = document.querySelectorAll(`li:nth-child(odd)`);
namesOdd.forEach((el) => {
    el.style = "color: red";
    setInterval(() => {
        el.style.color === "red"
            ? (el.style.color = "blue")
            : (el.style.color = "red");
    }, 2000);
});
console.log(namesOdd);

let namesEven = document.querySelectorAll(`li:nth-child(even)`);
namesEven.forEach((el) => {
    el.style = "color: blue";
    setInterval(() => {
        el.style.color === "blue"
            ? (el.style.color = "red")
            : (el.style.color = "blue");
    }, 2000);
});

console.log(namesEven);
