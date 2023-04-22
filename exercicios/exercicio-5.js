// Solução 1

/**
 * Exercício:
 * Crie um programa que receba um número inteiro positivo N e exiba no terminal a sequência de Fibonacci até o número N.
 * 
 * A sequência de Fibonacci é uma sequência de números em que cada número subsequente é a soma dos dois números anteriores. A sequência começa com 0 e 1.
 */

// Definindo a variável
let n = 20;

// Iniciando a sequência com 0 e 1
let fibonacci = [0, 1];

// Loop while para calcular a sequência até N
while (fibonacci[fibonacci.length - 1] < n) {
  fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
}

// Exibindo a sequência de Fibonacci até N
console.log(fibonacci.slice(0, -1));

/**
 * Nesta solução, a variável n é definida com o valor do número inteiro positivo 
 * limite da sequência de Fibonacci. A sequência é iniciada com os valores 0 e 1, 
 * e é utilizada um loop while para calcular a sequência até o valor n. Em seguida, 
 * a sequência é exibida no terminal utilizando o método slice para remover o 
 * último número, que é maior do que n.
 */

/**
 * #############################################################################
 */

// Solução 2

// Função que recebe um número inteiro positivo e exibe a sequência de Fibonacci até ele
function exibirFibonacci(n) {
  let fibonacci = [0, 1];
  while (fibonacci[fibonacci.length - 1] < n) {
    fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
  }
  console.log(fibonacci.slice(0, -1));
}

// Chamando a função com o valor 50
exibirFibonacci(50);

/**
 * Nesta solução, a lógica é encapsulada em uma função exibirFibonacci, que recebe 
 * um número inteiro positivo como parâmetro e utiliza um loop while para calcular 
 * a sequência de Fibonacci até o valor n. Em seguida, a sequência é exibida no 
 * terminal utilizando o método slice para remover o último número, que é maior 
 * do que n. A função é chamada com o valor 50 como exemplo.
 * 
 * Ambas as soluções respeitam as boas práticas de programação, como o uso de 
 * nomes de variáveis e funções descritivas e o uso correto das estruturas de 
 * dados. A segunda solução também torna o código mais modular e reutilizável.
 */