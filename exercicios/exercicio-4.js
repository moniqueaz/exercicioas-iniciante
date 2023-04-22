// Solução 1

/**
 * Exercício:
 * Crie um programa que receba um número inteiro positivo N e exiba no terminal todos os números pares de 0 até N.
 */

// Definindo a variável
let n = 10;

// Loop for para exibir os números pares
for (let i = 0; i <= n; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
/**
 * Nesta solução, a variável n é definida com o valor do número inteiro positivo 
 * a ser utilizado na sequência. Em seguida, é utilizado um loop for para verificar 
 * se cada número na sequência é par (divisível por 2), e exibir apenas os números
 * pares no terminal.
 */

/**
 * #############################################################################
 */

// Solução 2

// Função que recebe um número inteiro positivo e exibe os números pares
function exibirNumerosPares(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

// Chamando a função com o valor 8
exibirNumerosPares(8);

/**
 * Nesta solução, a lógica é encapsulada em uma função exibirNumerosPares, que 
 * recebe um número inteiro positivo como parâmetro e utiliza um loop for para 
 * verificar se cada número na sequência é par (divisível por 2), e exibir apenas 
 * os números pares no terminal. A função é chamada com o valor 8 como exemplo.
 * 
 * Ambas as soluções respeitam as boas práticas de programação, como o uso de 
 * nomes de variáveis e funções descritivas e o uso correto das estruturas de 
 * dados. A segunda solução também torna o código mais modular e reutilizável.
 */