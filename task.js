// - Создайте класс House, которая позволяет создавать объект здания с параметрами длины(length), ширины(width) и
// количество этажей(floors) Добавьте ему статический метод sortBuyFloors который можно будет использовать для
// сортировки зданий по возрастанию их высоты.
class House {
    constructor(length, width, floors) {
        this.length = length;
        this.width = width;
        this.floors = floors;
    }
    static sortBuyFloors(houseOne, houseTwo) {
        return houseOne.floors - houseTwo.floors;
    }
}
let firstHouse = new House(10, 20, 3);
let secondHouse = new House(15, 10, 2);

// - На основании класса House создайте класс Skyscraper (небоскреб, по сути реализуйте через наследование). Данный
// класс кроме свойств length, width и floors должен предоставлять дополнительное свойство offices(количество
// выделенных в офисе задний, можете задать их любым на ваше усмотрение);
//     Добавьте свойство fullArea который будет соответствовать суммарной площади всех этажей вашего небоскреба. Данное
// свойсвто создать через get/set.
//     При этом если площадь небоскреба увеличиась - то это значит что сверху построили еще этажи а длина и ширина не
// поменялись, площадь может быть только увеличена. Опишите в get как будет осуществляться подсчет площади и вывод этой
// площадь, а в set определите как будет определяться новое количесвто этажей.

class Skyscraper extends House {
    constructor(length, width, floors, offices) {
        super(length, width, floors);
        this.offices = offices;
    }
    get fullArea() {
        return this.length * this.width * this.floors;
    }

    set fullArea(value) {
        if (value < this.length * this.width * this.floors) {
            return console.log(`площадь меньше предыдушей`);
        } else {
            this.floors = value / (this.length * this.width);
        }
    }
}

let threeHouse = new Skyscraper(10, 10, 5, 20);

// - Создайте три внебоскреба firstSkyscraper, secondSkyscraper и thirdSkyscraper. Выведите площадь каждого из них
// используя get fullArea. Попробуйте задать кому-нибудь из них большую площаь чем первоначальная. Выведите теперь
// новое количество этажей изменненного внебоскреба. Убедитесь что количество этажей поменялось а длина и ширина - нет.
// Если это так - то логика внутри set fullArea реализована правильно.

let firstSkyscraper = new Skyscraper(10, 20, 3, 20);
let secondSkyscraper = new Skyscraper(15, 10, 2, 20);
let thirdSkyscraper = new Skyscraper(10, 10, 5, 20);

// - Оберните firstSkyscraper, secondSkyscraper и thirdSkyscraper в массив skyscrapers и отсортируйте его по
// возрастанию высоты небоскребов, используя статический метод класса-родителя sortBuyFloors.

let skyscrapers = [firstSkyscraper, secondSkyscraper, thirdSkyscraper];

skyscrapers.sort(House.sortBuyFloors);

// вывело :
// (3) [Skyscraper, Skyscraper, Skyscraper]
// 0: Skyscraper {length: 15, width: 10, floors: 2, offices: 20}
// 1: Skyscraper {length: 10, width: 20, floors: 3.5, offices: 20}
// 2: Skyscraper {length: 10, width: 10, floors: 5, offices: 20}
// length: 3
// __proto__: Array(0)
