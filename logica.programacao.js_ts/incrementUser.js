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

for (let index = 0; index < pessoas.length; index++) {
  pessoas[index].idade++;
  console.log(pessoas)
}