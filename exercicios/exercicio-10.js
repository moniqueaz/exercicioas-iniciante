// Solução 1

/**
 * Exercício:
 * Faça um programa em JavaScript que leia um número inteiro N maior que zero e calcule a soma dos N primeiros números naturais.
 * 
 * Exemplo de entrada:
 * N = 5
 * 
 * Exemplo de saída:
 * A soma dos 5 primeiros números naturais é 15.
 */

function somaNaturais1(n) {
  let soma = 0;
  for (let i = 1; i <= n; i++) {
    soma += i;
  }
  return soma;
}

const n = 5;
const resultado = somaNaturais1(n);
console.log(`A soma dos ${n} primeiros números naturais é ${resultado}.`);


/**
 * #############################################################################
 */

// Solução 2

function somaNaturais2(n) {
  return (n * (n + 1)) / 2;
}

const n = 5;
const resultado = somaNaturais2(n);
console.log(`A soma dos ${n} primeiros números naturais é ${resultado}.`);


/**
 * Ambas soluções são válidas e respeitam as boas práticas de programação, 
 * utilizando nomes de variáveis e funções significativos e estruturas de dados 
 * apropriadas. A solução 1 utiliza um loop for para somar os números naturais, 
 * enquanto a solução 2 utiliza a fórmula matemática da soma dos termos de uma 
 * progressão aritmética.
 */