/*
  Execício
  - Remover uma pessoa do array de objetos sem utilizar o for()
*/

const pessoas = [
  {
      'Primeiro Nome': "Paulo",
      ultimoNome: "Pereira",
      idade: 25,
      corOlhos: "Castanho",
      habilidades: ['css','html', 'Javascript'],
      niveis:{
          css: 8,
          html:10,
          javascript:10
      }
  },
  {
      'Primeiro Nome': "Marina",
      ultimoNome: "Pereira",
      idade: 25,
      corOlhos: "Castanho",
      habilidades: ['css','html', 'Javascript'],
      niveis:{
          css: 8,
          html:10,
          javascript:10
      }
  },
  {
      'Primeiro Nome': "Carlos",
      ultimoNome: "Pereira",
      idade: 25,
      corOlhos: "Castanho",
      habilidades: ['css','html', 'Javascript'],
      niveis:{
          css: 8,
          html:10,
          javascript:10
      }
  },
  {
      'Primeiro Nome': "Priscila",
      ultimoNome: "Pereira",
      idade: 25,
      corOlhos: "Castanho",
      habilidades: ['css','html', 'Javascript'],
      niveis:{
          css: 8,
          html:10,
          javascript:10
      }
  }
]

let index = pessoas.findIndex(pessoa => pessoa['Primeiro Nome'] === 'Carlos');
if (index !== -1) {
  pessoas.splice(index, 1);
}

// console.log('Pessoas', pessoas)


console.log("Pessoas antes: ", pessoas)

let removePessoa = "Priscila";

for(let i = 0; i < pessoas.length; i++){
   if(pessoas[i]["Primeiro Nome"] == removePessoa){
       pessoas.splice(i, 1);
   }
}

console.log("Pessoas depois: ", pessoas)
