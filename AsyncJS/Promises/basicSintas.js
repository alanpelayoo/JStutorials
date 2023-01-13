// Promise constructos
var promise = new Promise(function(resolve, reject) {
    // do a thing, possibly async, then…
    const x = 1;
    setTimeout(function callback() {
        if (x) {
            resolve("Stuff worked!");
          }
          else {
            reject(Error("It broke"));
          }
    }, 2000);
  });

// Use Promise

promise.then(function(result) {
    console.log(result); // "Stuff worked!"
  }, function(err) {
    console.log(err); // Error: "It broke"
  });