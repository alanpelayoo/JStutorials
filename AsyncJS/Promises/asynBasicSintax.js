// async function getData() {
//     const result = await serverCall(); // Server Call is a promise, result is the resolution of promise

//     // this will not run until serverCall resolves/rejects
//     return result;
// }

// // Above equials

// function getData() {
//     return serverCall().then((result) => {
//         return result;
//     });
// }

// What goes right to await is a function that returns a promise
// wait ms milliseconds
function wait(ms) {
    return new Promise((r) => setTimeout(r, ms));
}

async function hello() {
    console.log("here")
    await wait(3000);
    console.log("done")
    return 'world';
  }


hello()
  