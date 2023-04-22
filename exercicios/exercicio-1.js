// Solução 1

/**
 * Exercício:
 * Crie um programa que leia dois números inteiros e calcule a soma, subtração, 
 * multiplicação e divisão entre eles. Exiba os resultados no terminal.
 */

// Definindo as variáveis
let num1 = 10;
let num2 = 5;

// Operações matemáticas
let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;

// Exibindo os resultados no terminal
console.log(`Soma: ${soma}`);
console.log(`Subtração: ${subtracao}`);
console.log(`Multiplicação: ${multiplicacao}`);
console.log(`Divisão: ${divisao}`);

/**
 * Nesta solução, as variáveis num1 e num2 são definidas com os 
 * valores dos números a serem operados. Em seguida, as operações 
 * matemáticas são realizadas e os resultados são exibidos no terminal.
 */

/**
 * #############################################################################
 */

// Solução 2

// Função que recebe dois números e retorna um objeto com as operações
function operacoesMatematicas(num1, num2) {
  let resultado = {
    soma: num1 + num2,
    subtracao: num1 - num2,
    multiplicacao: num1 * num2,
    divisao: num1 / num2,
  };

  return resultado;
}

// Chamando a função e exibindo os resultados no terminal
let resultado = operacoesMatematicas(10, 5);
console.log(`Soma: ${resultado.soma}`);
console.log(`Subtração: ${resultado.subtracao}`);
console.log(`Multiplicação: ${resultado.multiplicacao}`);
console.log(`Divisão: ${resultado.divisao}`);

/**
 * Nesta solução, a lógica é encapsulada em uma função operacoesMatematicas, 
 * que recebe dois números como parâmetros e retorna um objeto com os 
 * resultados das operações. Os resultados são então exibidos no terminal. 
 * Isso torna o código mais modular e fácil de entender.
 * 
 * Ambas as soluções respeitam as boas práticas de programação, como o uso 
 * de nomes de variáveis e funções descritivas e o uso correto das 
 * estruturas de dados.
 */