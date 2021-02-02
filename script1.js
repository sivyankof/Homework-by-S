let form = document.querySelector(`form`);



form.addEventListener(`click`, async function () {
    let obj = {
        title: "foo",
        body: "bar",
        userId: 1,
    };

    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(obj),
    });

    let result = await response.json();

    if (response.ok) {

        // рандомный цвет
        let color = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();

        let div = document.createElement("div");

        div.innerHTML =
            `title: ` + result.title + `<br>` + `body: ` + result.body;
        div.style.color = color;

        document.body.append(div);
    }

});
