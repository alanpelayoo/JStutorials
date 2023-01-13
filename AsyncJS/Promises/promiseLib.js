class Pact {
    constructor(executor) {
        this.thenFncs = []
        this.catchFncs = []
        this.status = "PENDING";

        this.resolve = (value) => {
            this.resolvedValue = value;
            this.status = "RESOLVED";
            this.thenFncs.forEach((fn) => fn(value));
        }
        this.reject = (value) => {
            this.catchFncs.forEach((fn) => fn(value));
        }

        executor(this.resolve, this.reject);
    }
    then(_then) {
        if (this.status === "PENDING"){
            return new Pact((resolve, reject) => {
                this.thenFns.push((val) => {
                    resolve(_then(val));
                });
            });
        }
        else if (this.status === "RESOLVED"){
            _then(this.resolvedValue);
        }
    }
    catch(_catch) {
        this.catchFncs.push(_catch)
    }
}

const pact = new Pact((resolve, reject) => {
    setTimeout(() => {
        // after half a second we resolve with 42
        resolve(42);
    }, 100);
});

const value = pact.then((value) => {
    // after resolve is called, 42 is passed here
    
    return value * 2
});

value.then((val) => {
    console.log(val); // 168
});
