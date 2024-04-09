"use strict";
class Rectangulo {
    constructor() {
        this.baseRectangulo = 2;
        this.alturaRectangulo = 3;
        this.color = "Rojo";
    }
    calcularArea() {
        return this.alturaRectangulo * this.baseRectangulo;
    }
    calcularPerimetro() {
        return (2 * this.alturaRectangulo) + (2 * this.baseRectangulo);
    }
}
