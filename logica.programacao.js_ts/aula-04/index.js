

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

   //console.log('cadastro inicial: ',pessoas);

   let resposta

   //resposta = prompt("Add pessoa1")

   //const {...usario1} = pessoa2;
   pessoa2['Primeiro Nome'] = resposta;
   //pessoas.push(pessoa2);

   //resposta = prompt("Add pessoa2")

   //const {...usario2} = pessoa2;
   pessoa2['Primeiro Nome'] = resposta;
  // pessoas.push(pessoa2);
   

   //console.log("usários cadastrados: ", pessoas);

   // OPERADORES DE COMPARAÇÃO
   // ==, !=, >, <, >=, ===

   saida =  5 == 5;
   saida =  5 != 5;
   saida = "murilo" == "Murilo".toLowerCase();
   saida = 10 > 10;
   saida = 10 < 10; 
   saida = 10 >= 10;
   saida = 10 <= 10; 

   saida = 10 == 10; // true
   saida = 10 == "10" // true

   saida = 10 === "10" // false

   let meuNum = 31;
   saida = meuNum % 2 === 0;


   


   // OPERADORES LÓGICOS
   // ||, &&
    saida =   (2 == 2)    &&     (4 > 5); // false
    saida =   (2 == 2)    &&     (4 < 5); // true

    saida =   (2 == 2)    ||     (4 > 5); // true

    saida =   !(2 == 2)   ||     (4 > 5); // false

    //toggle
    let estado = false;
    estado = !estado;


    // EXERCÍCIO
    // Descobrir se a primeira letra de uma palavra é uma vogal
    const palavra = "Apple";
    const letra = palavra.charAt(0)
                         .toLowerCase();
    const vogal = "a" == letra || "e" == letra || "i" == letra || "o" == letra || "u" == letra;
   // console.log("SAIDA: ",  vogal)


    // ESTRUTURAS
        // CONDICIONAIS
        meuNum = 11;
        saida = meuNum % 2 === 0;

       /*  if(saida){
            console.log("é par")
        }else{
            console.log("é impar")
        } */

        let login = null
        //if(!login) console.log("true");

        // operador ternário
        saida =  login ? console.log("true") : console.log("false")
       // console.log("saida: ", saida);



        let idadeUsuario = 21;

        if(idadeUsuario < 18){
           // console.log("menor");
        }else if(idadeUsuario >= 18 && idadeUsuario < 60){
           // console.log("adulto");
        }else{
           // console.log("idoso");
        }

        let key = 9;
        let cor = "red"
        switch (cor) {
            case "red":
                //console.log("caiu no 2")
                break;
            case "blue":
               // console.log("caiu no 4")
                break;
            case "green":
                //console.log("caiu no 5")
                break;
            default:
                //console.log("caiu no default")
                break;
        }


        // EXERCICIOS
            // Digitar o nome do usuário que deseja remover
            console.log("Pessoas antes: ", pessoas)

            let nomeRemover = "Henrique";

            if(pessoas[0]["Primeiro Nome"] == nomeRemover){
                pessoas.shift();
               // pessoas.splice(0,1);
            }else if(pessoas[1]["Primeiro Nome"] == nomeRemover){
               pessoas.splice(1,1);
            }else if(pessoas[2]["Primeiro Nome"] == nomeRemover){
                pessoas.splice(2,1);
            }else if(pessoas[3]["Primeiro Nome"] == nomeRemover){
               // console.log('Caiu no henrque')
              //  pessoas.splice(3,1);
                pessoas.pop();
            }

            // console.log("Pessoas depois: ", pessoas)

            



