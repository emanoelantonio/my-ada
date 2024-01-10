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
      'Primeiro Nome': "Henrique",
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

function addPessoa() {
  for (let index = 0; index < pessoas.length; index++) {
    pessoas[index].idade++;
    console.log(pessoas)
  }
}

function removePessoa() {
  let user = "Paulo";

  for(let i = 0; i < pessoas.length; i++){
    if(pessoas[i]["Primeiro Nome"] == user){
       pessoas.splice(i, 1);
    }
  }
}

function addHability() {
  for(let i = 0; i < pessoas.length; i++) {
    if(pessoas[i]['Primeiro Nome'] === "Priscila") {
       pessoas[i].habilidades.push("Python");
    }
  }
  console.log('depois:', pessoas)
}

for (const pessoa of pessoas) {
  
}