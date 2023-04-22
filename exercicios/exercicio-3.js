// Solução 1

/**
 * Exercício:
 * Crie um programa que leia um número inteiro positivo N e exiba a sequência de números de 0 até N no terminal.
 */

// Definindo a variável
let n = 5;

// Loop for para exibir a sequência de números
for (let i = 0; i <= n; i++) {
  console.log(i);
}

/**
 * Nesta solução, a variável n é definida com o valor do número inteiro positivo 
 * a ser utilizado na sequência. Em seguida, é utilizado um loop for para exibir 
 * a sequência de números de 0 até N no terminal.
 */

/**
 * #############################################################################
 */

// Solução 2

// Função que recebe um número inteiro positivo e exibe a sequência de números
function exibirSequencia(n) {
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
}

// Chamando a função com o valor 3
exibirSequencia(3);

/**
 * Nesta solução, a lógica é encapsulada em uma função exibirSequencia, que recebe 
 * um número inteiro positivo como parâmetro e utiliza um loop for para exibir a 
 * sequência de números de 0 até N no terminal. A função é chamada com o valor 3 
 * como exemplo.
 * 
 * Ambas as soluções respeitam as boas práticas de programação, como o uso de 
 * nomes de variáveis e funções descritivas e o uso correto das estruturas de dados. 
 * A segunda solução também torna o código mais modular e reutilizável.
 */