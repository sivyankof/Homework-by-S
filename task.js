// Дан объект let user = { name: "Ivan", years: 19, car: "Subaru", telePhone: "iPhone", city: "Minsk" }.
// Запишите поле name в переменную userName, поле year в переменную userName, поле car в переменную userCar,
// остальные поля записать в объект userOtherInfo;

let user = {
    name: "Ivan",
    years: 19,
    car: "Subaru",
    telePhone: "iPhone",
    city: "Minsk",
};
let { name: userName, years: userYears, car: userCar, ...userOtherInfo } = user;

console.log(userName, userYears, userCar, userOtherInfo);

// Дан массив let arr = [1, "str", 24, {name: "Ivan"}, 89, undeifined, "10"]. Используя оператор расширение и
// соответсвие порядка следования элементов запишите первые два элемента массива в переменные firstElement,
// secondElement, число 89 (четвертый элемент массива) в переменную fifthElement. Остальные элементы после
// 89 запишите в массив otherElements;

let arr = [1, "str", 24, { name: "Ivan" }, 89, undefined, "10"];
let [firstElement, secondElement, , fifthElement, ...otherElements] = arr;

console.log(firstElement, secondElement, fifthElement, otherElements);

// Используя объект Date представьте текущую дату на момент выполения задания в формате DD.MM.YYYYY
// (например 5.12.2020). Расширить задание таким образом чтобы если день месяца есть число меньше 10 перед ней
// ставился "0" (например 05.12.2020);

let today = new Date();
function nowDate(obj) {
    obj = obj.getDate();
    {
        obj = obj.toString();
        if (obj[0] != 0 && obj.length == 1) {
            obj = `0` + obj;
        }
    }
    return obj;
}
function nowMonth(obj) {
    obj = obj.getMonth();
    {
        obj = obj.toString();
        if (obj[0] != 0 && obj.length == 1) {
            obj = `0` + obj;
        }
    }
    return obj;
}
function nowYear(obj) {
    obj = obj.getFullYear();
    return obj;
}

let presentDay = nowDate(today) + `.` + nowMonth(today) + `.` + nowYear(today);
console.log(presentDay);

// одно из решений
// let today = new Date();

// function format(obj) {
//     let day = fill(obj.getDate());
//     let month = fill(obj.getMonth());
//     let year = obj.getFullYear();

//     return day + "." + month + "." + year;

//     function fill(number) {
//         number = String(number);
//         if (number[0] != 0 && number.length == 1) {
//             number = 0 + number;
//         }
//         return number;
//     }
// }

// console.log(format(today));

// - Дан объект let user = {
//     name: "Ivan",
//     age: 19
//    };
// Создайте копию объекта использую сериализацию и десериализацию (JSON.stringify(), JSON.parse());

let user1 = {
    name: "Ivan",
    age: 19,
};

let copyUser = JSON.parse(JSON.stringify(user1));
