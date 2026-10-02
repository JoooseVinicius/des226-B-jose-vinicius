let entrada = require("prompt-sync")();

let Usuario1 = "Tchakabum";
let Senha1 = "40028922";
let Saldo1 = 500;

let Usuario2 = "Ghost";
let Senha2 = "1234";
let Saldo2 = 0.00;

let Usuario3 = "Soap";
let Senha3 = "4321";
let Saldo3 = 21.50;

let usOk = false;
let snOk = false;
let acessoPermitido = false;

let usuarioLogado = null;
let saldoUsuarioLogado

console.log("Insira seus dados para acessar o sistema! ");

let logUsuario = entrada("Nome de usuário: ");
let logSenha = entrada("Senha: ");

//Validação de Usuário

if (Usuario1 == LoginUsuario.toLowerCase) {
    console.log("Nome de usuário verificado com sucesso!");
    usOk = true;
}
if (Usuario2 = LoginUsuario.toLowerCase) {
    console.log("Nome de usuário verificado com sucesso!");
    usOk = true;
}
if (Usuario3 = LoginUsuario.toLowerCase) {
    console.log("Nome de usuário verificado com sucesso!");
    usOk = true;
}

if ( Senha1){
    console.log("Senha verificada com sucesso!");
    snOk === false;
}
if (LogSenha = Senha2){
    console.log("Senha verificada com sucesso!");
    snOk === false;
}
if (logSenha = Senha3){
    console.log("Senha verificada com sucesso!");
    snOk === false;
}
//Validação de Usuário FIM

if (usOk === true){
    if (snOk === true){
        acessoPermitido = true;
    }
}

if (!acessoPermitido){
    console.log("Acesso Negado");
} else {
    console.log("Acesso Permitido!");
}

entrada("Pressione enter para finalizar o programa!");