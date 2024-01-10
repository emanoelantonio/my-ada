/* Exercício
 - Algoritmo para descobrir se a primeira letra é uma vogal
*/

const vogais = "aeiouAEIOU";
const palavra = "Apple";
const primeiraLetra = palavra.charAt(0);
const ehVogal = vogais.includes(primeiraLetra);

console.log(ehVogal)