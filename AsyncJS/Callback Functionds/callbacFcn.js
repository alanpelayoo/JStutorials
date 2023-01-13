function simpleFunction(fn) {
    // invoke the callback function
    fn();
}

simpleFunction(function callbackFunction() {
    console.log('hi');
});


setTimeout(function callback() {
    // the code to run after 1000 milliseconds
}, 1000);

// code down here runs synchronously (before the callback)