let entrada = require('prompt-sync')();

let idade = entrada("Qual a sua idade?");

console.log(idade);

let acompanhado = true;
let bloqueado = false;

if ((idade >= 18 || acompanhado) && !bloqueado) {
    console.log("Acesso Liberado");
} else if (bloqueado) {
    console.log("Acesso Bloqueado");
} else {
    console.log("Acesso Negado");
}