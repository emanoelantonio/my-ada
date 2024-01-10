console.log('===== Aula-01 =====');
// Array
const nomes = ['Emanoel', 'Priscila'];
const telefone = ['1111-1111', '2222-2222'];

nomes.forEach((nome, indice) => console.log(nome, telefone[indice]));

// Tipos Abstratos de dados
const contato = {
  nome: 'Emanoel',
  telefone: '1111-1111'
}

const contato2 = {
  nome: 'Priscila',
  telefone: '2222-2222'
}

const contatos = [contato, contato2]
contatos.forEach(contato => console.log(contato.nome, contato.telefone));

// Classes
class Contato {
  constructor(valorDoNome, valorDoTelefone) {
    if (!valorDoNome || !valorDoTelefone) {
      throw new Error("Nome e Telefone são obrigatórios");
    }
    this.nome = valorDoNome;
    this.telefone = valorDoTelefone;
  }
}

const contatoTiao = new Contato("Tião", "1111-1111");
const contatoTieta = new Contato("Tieta", "2222-2222");

const contatosClasse = [contatoTiao, contatoTieta];

contatosClasse.forEach(contato => console.log(contato.nome, contato.telefone));

class Agenda {
  constructor() {
    this.contatos = [];
  }

  adicionarContato(contato) {
    this.contatos.push(contato);
  }
}

