
function Shape(x, y) {
    // store x and y in this.position
    this.position = {
        x:x,
        y:y
    }
}

function Circle(x, y, radius) {
    Shape.call(this, x, y);
    this.radius = radius;
}

