/* 1) На learn.javascript.ru изучить следующие статьи:
	- https://learn.javascript.ru/closure (Замыкание);
	- https://learn.javascript.ru/var (var, let и const);
	- https://learn.javascript.ru/settimeout-setinterval (Таймеры);
	- https://learn.javascript.ru/global-object (Глобальный объект);
	- https://learn.javascript.ru/object (Объект);
	- https://learn.javascript.ru/object-copy (Копирование объектов и ссылки);

2) Практика:
- Напишите функцию func() которая при каждом своем вызове будет возвращать количество своих вызовов (сколько раз ее 
вызывали до этого плюс этот вызов); */
let func = () => {
    let count = 0;
    return function () {
        return count++;
    };
};
let one = func();
console.log(one());

/*-  Напишите функцию которая будет увеличивать переменную let i = 0, от 0 до 20, при чем переменная будет увеличивать 
свое значение на единицу каждые 2 секунды. Когда переменная станет равной 20 прекратить увеличение. Попробуйте 
реализовать через setInterval и через рекурсивный setTimeout. */
let i = 0;
let increase = () => {
    i++;
    console.log(i);
};

let timerId = setInterval(increase, 2000);
setTimeout(() => {
    clearInterval(timerId);
}, 40000);

/* - Напишите функцию startTimer() которая будет запускать вывод через confirm("Реклама исчезнет через 5 секунд, 
вы согласны ?"), при нажатии "ДА" выводите alert("Реклама") через 5 секунд, если нажали "НЕТ", то повторить в
опрос confirm("Реклама исчезнет через 5 секунд, вы согласны ?") и так до тех пор пока пользователь нажмет "ДА" и не 
увидит эту рекламу через alert.  */

let startSpam = setTimeout(function startTimer() {
    let spam = confirm("Реклама исчезнет через 5 секунд, вы согласны ?");
    {
        if (spam === true) {
            setTimeout(() => alert("Реклама"), 5000);
        } else {
            setTimeout(startTimer, 5000);
        }
    }
}, 5000);

//_______________________________________
let user = { name: `Alesha` };
user[user.name] = user;

function inf(obj) {
    let count = 0;
    for (let key in obj) {
        if (obj[key] == obj[key]) {
            count += 1;
            inf(obj);
        } else {
            return count;
        }
    }
    return count;
}
inf(user);
