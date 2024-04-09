class Rectangulo {
    baseRectangulo: number = 2;
    alturaRectangulo: number = 3;
    color: string = "Rojo";

    calcularArea(): number {
        return this.alturaRectangulo * this.baseRectangulo;
    }

    calcularPerimetro(): number {
        return (2 * this.alturaRectangulo) + (2 * this.baseRectangulo);
    }
}