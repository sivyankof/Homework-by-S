

let name = prompt("Введите Ваше имя:", "");
function hello2(name) {
  if (String(name)) {
    alert(`Привет`  + `${name}`);
  } else if (name == `` || name == null) {
    alert(`Привет гость`);
  }
  return name;
}
hello2(name);