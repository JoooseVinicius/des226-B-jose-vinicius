
let segundos = 0;

let cronometro = setInterval(() => {

    segundos++;

    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);

    process.stdout.write('Tempo decorrido: ' + segundos + ' segundo(s)');

    if (segundos === 15) {
        clearInterval(cronometro);
        console.log('\nTempo limite de 15 segundos atingido!');
    }

}, 1000);