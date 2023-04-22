// Solução 1

/**
 * Exercício:
 * Crie um programa em JavaScript que receba dois números do usuário (número inicial e número final) e exiba no terminal a soma dos números pares entre eles.
 */

function somarNumerosPares(inicio, fim) {
  let soma = 0;

  for (let i = inicio; i <= fim; i++) {
    if (i % 2 === 0) {
      soma += i;
    }
  }

  return soma;
}

const inicio = parseInt(prompt('Digite o número inicial:'));
const fim = parseInt(prompt('Digite o número final:'));
const resultado = somarNumerosPares(inicio, fim);

console.log(`A soma dos números pares entre ${inicio} e ${fim} é ${resultado}.`);

/**
 * #############################################################################
 */

// Solução 2

function somarNumerosPares(inicio, fim) {
  let soma = 0;

  for (let i = Math.ceil(inicio / 2) * 2; i <= fim; i += 2) {
    soma += i;
  }

  return soma;
}

const inicio = parseInt(prompt('Digite o número inicial:'));
const fim = parseInt(prompt('Digite o número final:'));
const resultado = somarNumerosPares(inicio, fim);

console.log(`A soma dos números pares entre ${inicio} e ${fim} é ${resultado}.`);


/**
 * Explicação:
 * As duas soluções utilizam um loop for para percorrer todos os números entre 
 * o número inicial e o número final, verificando se cada número é par ou não. 
 * A primeira solução verifica a paridade de cada número utilizando o operador 
 * módulo (%), enquanto a segunda solução utiliza uma fórmula matemática para 
 * encontrar o primeiro número par entre o número inicial e o número final e, 
 * a partir dele, somar apenas os números pares. Em ambas as soluções, o 
 * resultado é armazenado em uma variável soma e, no final, é exibido no 
 * terminal a soma dos números pares encontrados.
 */