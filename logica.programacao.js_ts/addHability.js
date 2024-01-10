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
console.log('antes', [...pessoas])
for(let i = 0; i < pessoas.length; i++) {
  if(pessoas[i]['Primeiro Nome'] === "Priscila") {
     pessoas[i].habilidades.push("Python");
  }
}
console.log('depois:', pessoas)