class Partida {
  constructor(palavra) {
      this.palavra = palavra.toLowerCase();
      this.letrasChutadas = [];
      this.letrasCorretas = [];
      this.erros = 0;
      this.pontos = 0;
  }

  chutarLetra(letra) {
      let letraMinuscula = letra.toLowerCase();
      if (this.letrasChutadas.includes(letraMinuscula)) {
          return 'Esta letra já foi chutada';
      }

      this.letrasChutadas.push(letraMinuscula);

      if (this.palavra.includes(letraMinuscula)) {
          this.letrasCorretas.push(letraMinuscula);
          this.pontos += 5;
          return `Você acertou a letra ${letraMinuscula} e ganhou 5 pontos. Seu progresso: ${this.montarPalavra()}`;
      } else {
          this.erros++;
          return `Você errou a letra ${letraMinuscula}. Você tem ${this.erros} erros.`;
      }
  }

  montarPalavra() {
      let palavraMontada = '';
      for (let letra of this.palavra) {
          if (this.letrasCorretas.includes(letra)) {
              palavraMontada += letra;
          } else {
              palavraMontada += '_';
          }
      }
      return palavraMontada;
  }

  chutarPalavra(palavraChutada) {
      let palavraMinuscula = palavraChutada.toLowerCase();
      if (this.letrasChutadas.includes(palavraMinuscula)) {
          throw new Error('Esta palavra já foi chutada');
      }

      this.letrasChutadas.push(palavraMinuscula);

      if (this.palavra === palavraMinuscula) {
          this.pontos += 10 + (this.palavra.length - this.letrasCorretas.length) * 7;
          return `Parabéns, você adivinhou a palavra! Você ganhou ${this.pontos} pontos.`;
      } else {
          this.erros++;
          return `Você errou a palavra. Você tem ${this.erros} erros.`;
      }
  }
}

class ControladorJogo {
  constructor() {
      this.partidas = [];
      this.palavras = ['javascript', 'arara'];
  }

  iniciarPartida() {
      let palavraSorteada = this.palavras[Math.floor(Math.random() * this.palavras.length)];
      let partida = new Partida(palavraSorteada);
      this.partidas.push(partida);
      return partida;
  }
}
