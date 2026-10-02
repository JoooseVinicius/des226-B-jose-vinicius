let entrada = require('prompt-sync')();

let numero = entrada("Digite um número");

console.log(numero);

if (numero% 2 === 0){
    console.log("Par");
} else{
    console.log("Impar");
}

if (numero > 0){
    console.log("Positivo");
} else{
    console.log("Negativo");
}

if (numero === 0){
    console.log("Este número é 0!");
}