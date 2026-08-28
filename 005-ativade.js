let entrada = require("prompt-sync")();

let nomeDigitado;
let profissaoCargo;
let dataNascimento;

console.log();

nomeDigitado = entrada("Digite seu nome completo: ");
profissaoCargo = entrada("Sua profissão ou cargo atual: ");
dataNascimento = entrada("Digite sua data de nascimento: ");

console.log("Nome:" + nomeDigitado + "-Tipo:" + typeof nomeDigitado);
console.log("Trabalho:" + profissaoCargo + "-Tipo:" + typeof profissaoCargo);
console.log("Data:" + dataNascimento + "-Tipo:" + typeof dataNascimento);
