// установить первую букву свойства заглавной

var users = {
  firstName: "pavel",
  secondName: "ivanov",
  fatherName: "ivanovich",
  city: "minsk",
  car: "subaru",
  telephone: "samsung",
};

Object.keys(users).forEach(
  (key) =>
    (users[key] = `${users[key][0].toUpperCase()}${users[key].substring(1)}`)
);
