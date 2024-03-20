var calculadora = require("./calculadora.js");
const read = require('readline-sync');

console.log(" 0 para soma \n 1 para subtração \n 2 para multiplicação \n 3 para divisão \n 4 para fatorial \n 5 para logarítimo \n 6 para seno \n 7 para cosseno \n");
var operacao = parseInt(read.question("Digite a operacao desejada: "));

switch (operacao) {
    case 0:
      console.log("Soma");
      var num1 = parseFloat(read.question("Digite um numero: \n"));
      var num2 = parseFloat(read.question("Digite outro numero: \n"));
      console.log("Resultado da soma: " + calculadora.som(num1, num2));
      break;
    case 1:
      console.log("Subtracao");
      var num1 = parseFloat(read.question("Digite um numero: \n"));
      var num2 = parseFloat(read.question("Digite outro numero: \n"));
      console.log("Resultado da subtracao: " + calculadora.sub(num1, num2));
      break;
    case 2:
      console.log("Multiplicação");
      var num1 = parseFloat(read.question("Digite um numero: \n"));
      var num2 = parseFloat(read.question("Digite outro numero: \n"));
      console.log("Resultado da multiplicacao: " + calculadora.mult(num1, num2));
      break;
    case 3:
      console.log("Divisão");
      var num1 = parseFloat(read.question("Digite o numerador: \n"));
      var num2 = parseFloat(read.question("Digite o denominador: \n"));
      console.log("Resultado da divisao: " + calculadora.div(num1, num2));
      break;
    case 4:
      console.log("Fatorial");
      var num = parseFloat(read.question("Digite um numero: \n"));
      console.log("Resultado do fatorial: " + calculadora.fatorial(num));
      break;
    case 5:
      console.log("Logarítimo");
      var num1 = parseFloat(read.question("Digite o numero: \n"));
      var num2 = parseFloat(read.question("Digite a base do log: \n"));
      console.log("Resultado do logaritmo: " + calculadora.log(num1,num2));
      break;
    case 6:
      console.log("Seno");
      var num = parseFloat(read.question("Digite um angulo: \n"));
      console.log("Valor do Seno: " + calculadora.seno(num));
      break;
    case 7:
      console.log("Cosseno");
      var num = parseFloat(read.question("Digite um angulo: \n"));
      console.log("Valor do Cosseno: " + calculadora.coss(num));
      break;
    default:
      console.log("Operação inválida");
      break;
}