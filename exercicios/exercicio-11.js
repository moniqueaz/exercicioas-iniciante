// Solução 1

/**
 * Exercício:
 * Escreva um programa em JavaScript que solicite ao usuário a quantidade de 
 * números que ele deseja informar e, em seguida, peça que ele informe cada um 
 * dos números. O programa deverá exibir no console o maior e o menor número 
 * informado pelo usuário.
 */

function encontrarMaiorMenorNumero() {
  let quantidade = prompt("Quantos números você deseja informar?");
  let numeros = [];

  for (let i = 0; i < quantidade; i++) {
    let numero = parseFloat(prompt(`Informe o ${i + 1}º número:`));
    numeros.push(numero);
  }

  let maiorNumero = Math.max(...numeros);
  let menorNumero = Math.min(...numeros);

  console.log(`O maior número informado foi: ${maiorNumero}`);
  console.log(`O menor número informado foi: ${menorNumero}`);
}

encontrarMaiorMenorNumero();


/**
 * #############################################################################
 */

// Solução 2

function encontrarMaiorMenorNumero() {
  let quantidade = prompt("Quantos números você deseja informar?");
  let numeros = [];

  while (numeros.length < quantidade) {
    let numero = parseFloat(prompt(`Informe o ${numeros.length + 1}º número:`));
    numeros.push(numero);
  }

  let maiorNumero = numeros[0];
  let menorNumero = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
      maiorNumero = numeros[i];
    }

    if (numeros[i] < menorNumero) {
      menorNumero = numeros[i];
    }
  }

  console.log(`O maior número informado foi: ${maiorNumero}`);
  console.log(`O menor número informado foi: ${menorNumero}`);
}

encontrarMaiorMenorNumero();


/**
 * Nas duas soluções, é solicitado ao usuário que informe a quantidade de números 
 * que deseja informar. Em seguida, é utilizado um loop para solicitar que ele 
 * informe cada um dos números e armazená-los em um array. Depois, é utilizada 
 * uma função do objeto Math para encontrar o maior e o menor número no array e 
 * exibí-los no console. Na primeira solução, é utilizada a sintaxe spread do 
 * ES6 para passar o array como argumento para a função Math.max e Math.min. 
 * Na segunda solução, é utilizado um loop para percorrer o array e comparar 
 * cada um dos números com o maior e o menor número atual.
 */