let entrada = require("prompt-sync")();

// Declarando variaveis

let usuario1 = "Aluno";
let senha1 = "12345";
let saldo1 = "500";

let usuario2 = "Jose";
let senha2 = "54321";
let saldo2 = "1000";

let usuario3 = "Joana";
let senha3 = "98765";
let saldo3 = "0";

// Entrada do Usuário

let usuario = entrada("Digite seu usuário:  ");
let senha = entrada("Digite sua senha:  ");

// Variaveis de Controle

let usOk = false;
let snOk = false;
let acessoPermitido = false;

// Verificação do Usuário

usuario = usuario.toLowerCase();

if (usuario === usuario1 && senha === senha1){
    usOk = true;
}

if (usuario === usuario2 && senha === senha2){
    usOk = true;
}

if (usuario === usuario2 && senha === senha2){
    usOk = true;
}

// Verificação da Senha

if (usuario === usuario1 && senha === senha1){
    snOk = true;
}

if (usuario === usuario2 && senha === senha2){
    snOk = true;
}

if (usuario === usuario3 && senha === senha2){
    snOk = true;
}

// Verificação Final do Acesso

if (usOk && snOk){
    acessoPermitido = true;
}

if (!acessoPermitido){
    console.log("Acesso Negado!")
}

else{
    let saldo;
}

// Descobre o saldo do Usuário:

if (usuario === usuario1){
    saldo = saldo1;
}

else if (usuario === usuario2){
    saldo = saldo2;
}

else{
    saldo = saldo3;
}

console.log("Acesso Permitido!");
console.log("Saldo Disponivel: R$ + Saldo");

let saque = parseInt(entrada("Digite o valor que deseja sacar:"));

// Verificar se o saque é válido

if (saque > 0 && saque <= saldo){

// Novo Saldo

saldo = saldo - saque;

console.log("Saque Realizado!");
console.log("Novo saldo: $ = Saldo");

// Cálculo das notas de R$50

let nota50 = parseInt(saque/50);
let resto = saque % 50;

console.log("Notas de R$50: + notas50");
console.log("Valor restante para notas menores: R$ +")

}
else{
    console.log("Saque inválido!");
}