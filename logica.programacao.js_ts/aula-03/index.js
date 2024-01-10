

// console.log();

// TIPOS PRIMITIVOS
    // undefined
    let saida;
    // null
    saida = null
    // boolean
    saida = true;
    // string
    saida = "Murilo"
    // number
    saida = 5;
    // NaN
    saida = "Murilo" * 5;

// operadores aritiméticos
    

    saida = 1+1;
    saida = 5*1;
    saida = 5/1;
    saida = 5 + 5 / 10;
    saida = (5 + 5) / 10;
    saida = 10 % 2;

    

    // ex: MEDIA
    const n1 = 5;
    const n2 = 7;
    const n3 = 5;
    
    
    saida = (n1 + n2 + n3) / 3;

    



// MÉTODOS E PROPRIEDADES NATIVAS
    // strings
    let nome = "Angular";

    saida = nome.length;
    saida = nome.charAt(0);
    saida = nome.includes("Ar");
    saida = nome.indexOf("gu");
    saida = nome.toLowerCase();
        // Ex: Capitalized
        const primeiraLetra = saida.charAt(0);
        
        saida = primeiraLetra + saida.slice(1,6) // a   angular

        
    // numbers
    let peso = 70.567;
    let idade = "37 anos";
    let altura = "1.70";

    saida = peso.toFixed(2);
    saida = Number.parseInt(peso);
    saida = String(2);
    saida = Number.parseFloat(idade);
    
   
// MATH
    saida = Math.ceil(peso);
    saida = Math.floor(peso);
    saida = Number.parseInt(peso);
    saida = Math.abs(100 - 500);
    saida = Math.min(100, 55, 50, 87);
    saida = Math.max(100, 55, 50, 87);

    saida = (Math.random() * 50).toFixed(2);

   
/* 
    const resposta = prompt("Qual o valor máximo? ");
    saida = (Math.random() * resposta).toFixed(2);
    alert(saida);
 */

    //const min = Number( prompt("Qual o valor minimo? ")  );
   // const max = Number( prompt("Qual o valor máximo? ")  );
   // const min = +prompt("Qual o valor minimo? ");
   // const max = +prompt("Qual o valor máximo? ");

   // const min = 20;
   // const max = 50;
    //saida = min + (Math.random() *  (max - min) );


    
     // Ex: Número randomico
     // Exemplo número randomico com prompt
     // Exercício número randomico minimo e máximo
     // Exercício -> Capturar notas com prompt e mostrar a media.


// ARRAY
    const cursoAngular = "Angular";

    let meuArray = [
        cursoAngular, 
        20, 
        "React", 
        false, 
        [
            "oi",
            4,
            [1,2]
        ], 
        null 
    ]; 
        
    saida = meuArray[4][2][0];

    saida = meuArray.length
    saida = Array.from(meuArray);
    saida = meuArray.slice(1,6);
    //saida = meuArray.pop();
    saida = meuArray.shift();
    saida = meuArray.push("Vue");
    saida = meuArray.unshift("Next");

    // copiar
        // saida = meuArray.slice();
        // saida.pop();

        saida = meuArray;
        saida.pop(); 
    // unir arrays
        //saida = [meuArray,meuArray];
        saida = [...meuArray];
        saida = [...meuArray,...meuArray, [1,4,6]];

        saida = meuArray.concat(meuArray);

    

   // console.log("array de saida: ", saida);
    //console.log("array original: ", meuArray);

// OBJETOS
    const pessoa = {
        'Primeiro Nome': "Paulo",
        ultimoNome: "Pereira",
        idade: 25,
        corOlhos: "Castanho"
    };
    //saida = pessoa.primeiroNome;
    saida = pessoa['Primeiro Nome'];
    pessoa.idade = 30;
    pessoa.altura = 1.75;
    saida = Object.keys(pessoa);


    // Desestruturação
   //const {corOlhos:cor} = pessoa;
   //const {idade:_idade} = pessoa;
   //const {ultimoNome,...todos} = pessoa;

   const pessoa2 = {
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
    };

   console.log('cadastro inicial: ',pessoas);

   let resposta

   resposta = prompt("Add pessoa1")

   const {...usario1} = pessoa2;
   usario1['Primeiro Nome'] = resposta;
   pessoas.push(usario1);
   

   console.log("usários cadastrados: ", pessoas)
