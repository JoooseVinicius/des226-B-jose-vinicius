
const entrada = require('prompt-sync')();

let inicio = Number(entrada('Digite o número inicial: '));
let fim = Number(entrada('Digite o número final: '));

for (let n = inicio; n <= fim; n++) {

    console.log('\nTabuada do ' + n);

    for (let i = 1; i <= 10; i++) {
        console.log(n + ' x ' + i + ' = ' + (n * i));
    }

}
