function Shape(x,y) {
    this.position = { x,y }
}

// os objetos recién creados heredarán todas las propiedades de Punto2D.prototype. 
// Por lo tanto, se agregan nuevos método en shape.prototype
Shape.prototype.move = function(x,y) {
    // move the shape
}
