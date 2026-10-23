let codigoProduto = "A1";

switch (codigoProduto) {
  case "A1":
    console.log("Café - R$ 5,00");
    break;

  case "B2":
    console.log("Suco de Laranja - R$ 7,00");
    break;

  case "C3":
    console.log("Refrigerante - R$6,00");
    break;

  default:
    console.group("Código de produto inválido ou inexistente.");
    break;
}
