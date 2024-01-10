const contatoTiao = new Contato("Tiao", "1111-1111", "15-12-1970");
const contatoTieta = new Contato("Tieta", "2222-2222", "21-08-1978");

const agenda = new Agenda();

// Adicionar contato
agenda.adicionarContato(contatoTiao)
agenda.adicionarContato(contatoTieta)

console.log(agenda)

// Buscar um contato pelo nome
const encontrarContato = agenda.buscarContato("tiao");
console.log("Resultado da busca:", encontrarContato);

// Remover um contato pelo nome
// agenda.removerContato("Tiao");

// Verificar os contatos após a remoção
// console.log("Contatos após remoção:", agenda.contatos);