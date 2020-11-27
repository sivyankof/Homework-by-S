// установить первую букву свойства заглавной

var users = {
  firstName: "pavel",
  secondName: "ivanov",
  fatherName: "ivanovich",
  city: "minsk",
  car: "subaru",
  telephone: "samsung",
};
//----------- один вариант
Object.keys(users).forEach(
  (key) =>
    (users[key] = `${users[key][0].toUpperCase()}${users[key].substring(1)}`)
);

//--------- второй  вариант
Object.keys(users).map((str) => str[0].toUpperCase() + str.slice(1));