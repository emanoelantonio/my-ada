const listaConvidados = [
  { nome: "Samuel", idade: 25 },
  { nome: "Cássia",idade: 18 },
  { nome: "Eduardo",idade: 57 },
  { nome: "Vitor",idade: 15 },
  { nome: "José",idade: 82 }
]
          
// let podeTomarEnergeticos = listaConvidados.filter((convidados, index, array) => {
//     if (convidados.idade >= 18 && convidados.idade < 75) {
//         return true
//     }
// })

// console.log('Podem Tomar Energéticos:')
// console.table(podeTomarEnergeticos)

const listaDePresenca = listaConvidados.map((convidado, index, array) => {
  const presente = prompt(`O convidado ${convidado.nome} apareceu? (S/N)`).toUpperCase();
  return {
      ...convidado,
      nome: convidado.nome.toUpperCase(),
      presente: presente
  }
})

console.log('lista de presença:')
console.table(listaDePresenca);