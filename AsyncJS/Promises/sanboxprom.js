
const pact = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(42);
    }, 100);
}).then((val) => {
    console.log(val); // 42
    return val * 2;
}).then((val) => {
    console.log(val); // 84
    return val * 2;
});

pact.then((val) => {
    console.log(val); // 168
});