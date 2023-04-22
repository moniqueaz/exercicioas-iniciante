// Solução 1

/**
 * Exercício:
 * Crie um programa que leia um número inteiro e exiba se ele é par ou ímpar no terminal.
 */

// Definindo a variável
let num = 10;

// Verificando se é par ou ímpar
if (num % 2 == 0) {
  console.log(`${num} é par`);
} else {
  console.log(`${num} é ímpar`);
}

/**
 * Nesta solução, a variável num é definida com o valor do número a ser verificado. 
 * Em seguida, é verificado se o número é par ou ímpar utilizando o operador módulo %. 
 * Se o resto da divisão por 2 for igual a 0, o número é par e é exibida a mensagem correspondente. 
 * Caso contrário, é exibida a mensagem de número ímpar.
 */

/**
 * #############################################################################
 */

// Solução 2

// Função que recebe um número e retorna a string correspondente
function parOuImpar(num) {
  return num % 2 == 0 ? `${num} é par` : `${num} é ímpar`;
}

// Chamando a função e exibindo o resultado no terminal
console.log(parOuImpar(7));

/**
 * Nesta solução, a lógica é encapsulada em uma função parOuImpar, que recebe um 
 * número como parâmetro e retorna a string correspondente à sua paridade. 
 * É utilizada a expressão ternária para determinar qual mensagem será retornada. 
 * O resultado é então exibido no terminal.
 * 
 * Ambas as soluções respeitam as boas práticas de programação, como o uso de 
 * nomes de variáveis e funções descritivas e o uso correto das estruturas de dados. 
 * A segunda solução também torna o código mais modular e reutilizável.
 */