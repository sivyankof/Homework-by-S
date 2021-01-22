function cleanRoom(dirtyLevel) {
    let promise = new Promise(function (resolve, reject) {
        if ((dirtyLevel < 10) & (dirtyLevel > 1)) {
            setTimeout(() => resolve(dirtyLevel), dirtyLevel * 1000);
        } else {
            return setTimeout(
                () => reject(new Error()),
                dirtyLevel * 1000
            );
        }
    }).then(
        (result) => console.log(`Уборка проведена успешно за ${result} секунд`),
        (err) => console.log(`Опля, много времени убирать`)
    );
}

cleanRoom(2);
cleanRoom(11);
