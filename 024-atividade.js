
const entrada = require('prompt-sync')();

let n = Number(entrada('Digite um número inteiro: '));

for (n; n >= 0; n--) {
    console.log(n);
}

console.log("Decolagem autorizada!");

entrada("Pressione ENTER para encerrar o programa...");
