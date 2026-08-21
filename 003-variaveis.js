let entrada = require("prompt-sync")();

// comentário de uma linha
// string ex: 'qualquer texto'
let nome = "José"; //String
let idade = 19; //number ex: (10, 23, 45, 68)
let trabalha = true; //boolean ex: (true, false)
let endereço = {
  rua: "Avenida São Jão",
  num: 15,
  bairro: "São Pedro",
}; //object ex: (padrao, chave/valor)
let funcao = () => console.log("Oi");

/*
comentário de mais de uma linha
*/

// Exibindo tipos de variáveis
console.log("Tipos de variáveis");
console.log("Variável: nome:" + typeof nome);
console.log("Variável: idade:" + typeof idade);
console.log("Variável: trabalha:" + typeof trabalha);
console.log("Variável: endereço:" + typeof endereço);
console.log("Variável: funcao:" + typeof funcao);

// variáveis definidas sem valor
let nomeDigitado;
let idadeDigitada;
let trabalhoDigitado;

console.log(); // esse console.log aqui serve para pular uma linha.

//passando valor para as variáveis
nomeDigitado = entrada("Digite seu nome: "); //function ex: (bloco de código)
idadeDigitada = entrada("Qual sua idade?: ");
trabalhoDigitado = entrada("Você trabalha?: ");

//LET é apenas para CRIAR a variável

//Mostrando valor e tipo das variáveis

console.log("Nome:" + nomeDigitado + "-Tipo:" + typeof nomeDigitado);
console.log("Idade:" + idadeDigitada + "-Tipo:" + typeof idadeDigitada);
console.log(
  "Trabalho:" + trabalhoDigitado + "-Tipo:" + typeof trabalhoDigitado,
);
