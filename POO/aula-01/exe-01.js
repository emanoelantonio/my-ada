class Retangulo {

  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
  }

  calcularArea() {
    const area = this.base * this.altura;
    console.log(`A área do retângulo é ${area}`);
  }
}

const novoRetangulo = new Retangulo(5, 10);

novoRetangulo.calcularArea();