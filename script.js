async function f() {
    let users = [];

    let url = await fetch(`https://jsonplaceholder.typicode.com/posts`);

    let arr = await url.json();

    for (let i = 0; i < 20; i++) {
        users.push(arr[i]);
    }

    users.sort((a, b) => {
        return b.title.length - a.title.length;
    });
    
    console.log(users);
}

f();
