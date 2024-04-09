class Rectangulo {
    private ancho: number;
    private altura: number;
  
    constructor(ancho: number, altura: number) {
      this.ancho = ancho;
      this.altura = altura;
    }
  
    public calcularArea(): number {
      return this.ancho * this.altura;
    }
  
    public calcularPerimetro(): number {
      return 2 * (this.ancho + this.altura);
    }
  }
  
  const rectangulo = new Rectangulo(5, 10);
  
  console.log("Área del rectángulo:", rectangulo.calcularArea()); // Salida: 50
  console.log("Perímetro del rectángulo:", rectangulo.calcularPerimetro()); // Salida: 30