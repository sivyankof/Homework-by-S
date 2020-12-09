/* Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив, у которого 
есть все элементы входных массивов.
Например:
*/
let arrays = [[1, 2, 3], [4, 5], [6]];

let arr = arrays.reduce((acc, el) => acc.concat(el));

//или

let arr1 = arrays.reduce((acc, el) => [...acc, ...el]);

/* Создайте функцию-конструктор, которая позволяет создавать объект пользователя с полями first_name, second_name, age, 
city. С помощью данной функции создайте два объекта пользователей (два пользователя), имя, фамилию, возраст, город 
проживания задайтесами. */

function User(first_name, second_name, age, city) {
    this.first_name = first_name,
    this.second_name = second_name,
    this.age = age,
    this.city = city
};

let user1 = new User(`Andrey`, `Ivanov`, 21, `Gomel`);

/* Создайте функцию, которая позовляет вывести полную информацию о каждом из двух пользователей созданных в предыдущем 
задании.Функция должна выполнять вывод информации и не принимать аргументов. По сути нужно одну функцию привязать 
два объекта.*/
function User(first_name, second_name, age, city) {
    this.first_name = first_name,
    this.second_name = second_name,
    this.age = age,
    this.city = city,

    function sayHi(){
        alert(`Привет, меня звать ${this.first_name} ${this.second_name}, мне ${this.age} я живу в ${this.city}`);
    }
};

let user2 = new User(`Andrey`, `Ivanov`, 21, `Gomel`);