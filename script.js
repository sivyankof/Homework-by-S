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

async function cleanRooms(dirtiLevel_1, dirtiLevel_2, dirtiLevel_3) {
    return Promise.all([
        cleanRoom(dirtiLevel_1),
        cleanRoom(dirtiLevel_2),
        cleanRoom(dirtiLevel_3),
    ])
        .then((resolve) => {
            console.log(`Уборка проведена успешно за ${dirtiLevel_1} секунд`);
            return dirtiLevel_2;
        })
        .then((resolve) => {
            console.log(`Уборка проведена успешно за ${dirtiLevel_2} секунд`);
            return dirtiLevel_3;
        })
        .then((resolve) => {
            console.log(`Уборка проведена успешно за ${dirtiLevel_3} секунд`);
        })
        .catch((err) => console.log(err));
}

cleanRooms(1, 2, 3);
