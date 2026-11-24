let objeto = {}; // objeto vazio

let pessoa = {
    nome: 'José',
    profissao: 'Respositor',
    idade: 19,
    trabalha: true
}// objeto com atributos

let  funcionario = {
    nome: 'patolino',
    cargo: 'professor de português',
    salario: '8721,12',
    endereco: {
        rua: 'Ali do lado',
        numero: 12,
        bairro: 'Centro',
        cidade: 'Tupã'
    }
}

console.log(`Tipo variavel objeto vazio: ${typeoff(objeto)}`);
console.log(`Tipo variavel pessoa: ${typeoff(pessoa)}`);
console.log(pessoa); // visualizar objeto armazenado
console.log(`Nome da pessoa cadastrada: ${pessoa.nome}`); // visualizar o nome