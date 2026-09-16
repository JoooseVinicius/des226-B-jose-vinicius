let entrada = require("prompt-sync")();

let Usuario = "Tchakabum!";
let Senha = "40028922";
let usOk = false;
let snOk = false;
let acessoPermitido = false;

console.log("Insira seus dados para acessar o sistema! ");

let logUsuario = entrada("Nome de usuário: ");
let logSenha = entrada("Senha: ");

if (usuario = Usuario) {
    console.log("Nome de usuário verificado com sucesso!");
    usOk = true;
}

if (senha = Senha){
    console.log("Senha verificada com sucesso!");
    snOk === false;
}

if (usOk === true){
    if (snOk === true){
        acessoPermitido = true;
    }
}

if (acessoPermitido === true){
    console.log("Acesso permitido ao sistema!");
} else {
    console.log("Acesso Negado!");
}

entrada("Pressione enter para finalizar o programa!");