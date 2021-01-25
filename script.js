function cleanRoom(dirtiLevel) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (dirtiLevel <= 10) {
                resolve(dirtiLevel);
            } else {
                reject(`Опля, очень много времени убирать`);
            }
        }, dirtiLevel * 1000);
    });
}

function cleanRooms(dirtiLevel_1, dirtiLevel_2, dirtiLevel_3) {
    cleanRoom(dirtiLevel_1)
        .then((result) => {
            console.log(`Уборка проведена успешно за ${result} секунд`);
            return cleanRoom(dirtiLevel_2);
        })
        .then((result) => {
            console.log(`Уборка проведена успешно за ${result} секунд`);
            return cleanRoom(dirtiLevel_3);
        })
        .then((result) => {
            console.log(`Уборка проведена успешно за ${result} секунд`);
        })
        .catch((err) => console.log(err));
}

cleanRooms(1, 3, 11);
