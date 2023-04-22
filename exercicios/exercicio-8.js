// Solução 1

/**
 * Exercício:
 * Crie um programa em JavaScript que receba um número inteiro positivo e determine se ele é primo ou não. Um número é primo se é divisível apenas por 1 e por ele mesmo.
 */

function ehPrimo(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

let numero = parseInt(prompt("Digite um número inteiro positivo:"));
if (ehPrimo(numero)) {
  console.log(numero + " é primo");
} else {
  console.log(numero + " não é primo");
}

/**
 * #############################################################################
 */

// Solução 2

function ehPrimo(num) {
  if (num < 2) {
    return false;
  }
  let raiz = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= raiz; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

let numero = parseInt(prompt("Digite um número inteiro positivo:"));
if (ehPrimo(numero)) {
  console.log(numero + " é primo");
} else {
  console.log(numero + " não é primo");
}


/**
 * Explicação:
 * Ambas as soluções têm a mesma função ehPrimo, que recebe um número e retorna 
 * true se ele é primo ou false se não é. Na solução 1, a função percorre todos 
 * os números entre 2 e o número anterior ao número testado, verificando se é 
 * divisível por algum desses números. Na solução 2, a função percorre apenas os 
 * números entre 2 e a raiz quadrada do número testado, que é um limite superior 
 * conhecido para os fatores primos de um número. O programa pede ao usuário para 
 * digitar um número, chama a função ehPrimo e imprime uma mensagem no console 
 * indicando se o número é primo ou não. As duas soluções são eficientes para 
 * números pequenos, mas a solução 2 é mais rápida para números maiores.
 */