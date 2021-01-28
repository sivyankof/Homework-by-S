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
   
    let arr = Promise.all([
        cleanRoom(dirtiLevel_1),
        cleanRoom(dirtiLevel_2),
        cleanRoom(dirtiLevel_3),
    ]);

    // .then((resolve) => {
    //     console.log(`Уборка проведена успешно за ${resolve[0]} секунд`);
    //     console.log(`Уборка проведена успешно за ${resolve[1]} секунд`);
    //     console.log(`Уборка проведена успешно за ${resolve[2]} секунд`);
    // })
    // .catch((err) => console.log(err));
    try {

         let a = await arr;

         console.log(`Уборка проведена успешно за ${a[0]} секунд`);
         console.log(`Уборка проведена успешно за ${a[1]} секунд`);
         console.log(`Уборка проведена успешно за ${a[2]} секунд`);

    } catch (err) {
        console.log(err);
    }
}

cleanRooms(1, 2, 11);
