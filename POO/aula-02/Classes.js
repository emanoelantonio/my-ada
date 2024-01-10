class Contato {
  
  constructor(valorDoNome, valorDoTelefone, valorDataDeNascimento) {
    if (!valorDoNome || !valorDoTelefone || !valorDataDeNascimento) {
      throw new Error("Nome, Telefone  e Data de Nascimento são obrigatórios");
    }
    this.nome = valorDoNome;
    this.telefone = valorDoTelefone;
    this.dataNascimento = valorDataDeNascimento;
  }
}

class Agenda {
  
  constructor() {
    this.contatos = [];
  }

  adicionarContato(contato) {
    this.contatos.push(contato);
  }

  buscarContato(nome) {
    return this.contatos.filter(contato =>
      contato.nome.toLowerCase() === nome.toLowerCase());
  }

  removerContato(nome) {
    const index = this.contatos.findIndex(contato =>
      contato.nome.toLowerCase() === nome.toLowerCase());
    if (index !== -1) {
      this.contatos.splice(index, 1);
    }
  }
}

class Utils {
  
  static calcularIdade(dataNascimento) {
    const anoAtual = new Date().getFullYear();
    const anoContato = Number(dataNascimento.aplit('-')[2]);

    return anoAtual - anoContato;
  }
  
  static naoEVazio(valor) {
    // Não é nulo, não é undefined e não é vazio.
    return !!valor
  }
}