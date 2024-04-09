"use strict";
class Rectangulo {
    constructor(ancho, altura) {
        this.ancho = ancho;
        this.altura = altura;
    }
    calcularArea() {
        return this.ancho * this.altura;
    }
    calcularPerimetro() {
        return 2 * (this.ancho + this.altura);
    }
}
const rectangulo = new Rectangulo(5, 10);
console.log("Área del rectángulo:", rectangulo.calcularArea());
console.log("Perímetro del rectángulo:", rectangulo.calcularPerimetro());
