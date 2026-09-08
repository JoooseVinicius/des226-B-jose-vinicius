let entrada = require("prompt-sync")();

//vamos calcular

let strNum1 = entrada( "Insira o 1º valor: ");
let strNum2 = entrada( "Insira o 2º valor: ");

let num1 = parseInt(strNum1)
let num2 = parseInt(strNum2)

let soma = num1 + num2;
let subtração = num1 - num2;
let multiplicação = num1 * num2;
let divisao = num1 / num2;
let restoDivisao= num1 % num2;
let intDivisao = parseInt(num1 / num2);

console.log(`Soma: ${num1}  + ${num2}  + ${soma}`);
console.log(`Subtração: ${num1}  - ${num2}  - ${subtração}`);
console.log(`Multiplicação: ${num1}  * ${num2}  * ${multiplicação}`);
console.log(`Divisao: ${num1}  / ${num2}  / ${divisao.toFixed}`);
console.log(`RestoDivisao: ${num1}  ÷ ${num2}  sobra: ${restoDivisao}`);
console.log(`DivisaoInteira: ${num1}  ÷ ${num2}  ÷ ${intDivisao}`);

// esse "toFixed serve para deixar apenas duas casa decimais, sem mostrar até o onde cabe na tela"
// o parseInt serve para deixar um número como inteiro, caso o número 10 seja escrito de modo que, ao executar apareça como string o mesmo sera alterado para número inteiro.