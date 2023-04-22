// Solução 1

/**
 * Exercício:
 * Crie um programa em JavaScript que receba uma palavra do usuário e exiba no terminal a quantidade de vogais presente na palavra.
 */

function contarVogais(palavra) {
  const vogais = ['a', 'e', 'i', 'o', 'u'];
  let contador = 0;

  for (let letra of palavra.toLowerCase()) {
    if (vogais.includes(letra)) {
      contador++;
    }
  }

  return contador;
}

const palavra = prompt('Digite uma palavra:');
const quantidade = contarVogais(palavra);

console.log(`A palavra ${palavra} tem ${quantidade} vogais.`);

/**
 * #############################################################################
 */

// Solução 2

function contarVogais(palavra) {
  const vogais = 'aeiouAEIOU';
  let contador = 0;

  for (let letra of palavra) {
    if (vogais.includes(letra)) {
      contador++;
    }
  }

  return contador;
}

const palavra = prompt('Digite uma palavra:');
const quantidade = contarVogais(palavra);

console.log(`A palavra ${palavra} tem ${quantidade} vogais.`);

/**
 * Explicação:
 * Ambas as soluções utilizam um loop for para percorrer cada letra da palavra 
 * e verificar se ela é uma vogal ou não. A primeira solução utiliza um array 
 * de vogais e a função includes() para realizar a verificação, enquanto a 
 * segunda solução utiliza uma string contendo todas as vogais em ordem. 
 * Em ambas as soluções, o resultado é armazenado em uma variável contador e, 
 * no final, é exibido no terminal a quantidade de vogais encontradas.
 */