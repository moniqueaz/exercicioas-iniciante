// Solução 1

/**
 * Exercício:
 * Faça um programa em JavaScript que receba uma lista de números e retorne o maior e o menor número da lista. Imprima o resultado no terminal.
 */

function encontrarMaiorMenor(lista) {
  let maior = lista[0];
  let menor = lista[0];
  
  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > maior) {
      maior = lista[i];
    } else if (lista[i] < menor) {
      menor = lista[i];
    }
  }
  
  console.log(`Maior número: ${maior}`);
  console.log(`Menor número: ${menor}`);
}

const numeros = [5, 2, 8, 1, 10, 4];
encontrarMaiorMenor(numeros); // Maior número: 10, Menor número: 1


/**
 * Nesta solução, foi criada uma função encontrarMaiorMenor que recebe uma lista 
 * de números como parâmetro. Dentro da função, foi criada duas variáveis: maior 
 * e menor, que receberão, respectivamente, o primeiro elemento da lista como 
 * valor inicial. Em seguida, um loop for é utilizado para percorrer a lista, 
 * comparando cada elemento com as variáveis maior e menor. Se um elemento for 
 * maior do que maior, maior receberá o valor desse elemento; se um elemento 
 * for menor do que menor, menor receberá o valor desse elemento. No final, os 
 * valores de maior e menor são impressos no terminal.
 */

/**
 * #############################################################################
 */

// Solução 2

function encontrarMaiorMenor(lista) {
  const maior = Math.max(...lista);
  const menor = Math.min(...lista);
  
  console.log(`Maior número: ${maior}`);
  console.log(`Menor número: ${menor}`);
}

const numeros = [5, 2, 8, 1, 10, 4];
encontrarMaiorMenor(numeros); // Maior número: 10, Menor número: 1


/**
 * Nesta solução, a função encontrarMaiorMenor também recebe uma lista de 
 * números como parâmetro. Em vez de criar um loop for, é utilizada a função 
 * Math.max para encontrar o maior número da lista e a função Math.min para 
 * encontrar o menor número da lista. Essas funções são aplicadas à lista 
 * utilizando o spread operator (...lista). No final, os valores de maior e 
 * menor são impressos no terminal.
 */