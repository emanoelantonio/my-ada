class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  get descricao() {
    return `${this.nome} possui ${this.idade} anos de idade.`;
  }
}

class Funcionario extends Pessoa {
  constructor(nome, idade, matricula) {
    super(nome, idade);
    this.matricula = matricula;
  }

  get descricao() {
    return `${this.nome} possui ${this.idade} anos de idade e matricula ${this.matricula}`;
  }
}

class Gerente extends Funcionario {
  
}