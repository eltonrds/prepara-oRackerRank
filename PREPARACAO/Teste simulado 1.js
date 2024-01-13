/*
A mediana de uma lista de números é essencialmente o elemento intermediário após a classificação. 
O mesmo número de elementos ocorre depois dele como antes. 
Dada uma lista de números com um número ímpar de elementos, encontre a  mediana?

exemplo arr = [5,3,1,2,4]
a matriz classificada arr = [1,2,3,4,5] o elemento do meio e a mediana sao 3




Para encontrar a mediana de uma lista de números, você pode seguir os seguintes passos:

Classifique a matriz em ordem crescente.
Identifique o elemento do meio da lista, que será a mediana.
Aqui está uma implementação em JavaScript:

javascript
Copy code
function findMedian(arr) {
    // Passo 1: Classificar a matriz
    arr.sort((a, b) => a - b);

    // Passo 2: Identificar o elemento do meio
    const middleIndex = Math.floor(arr.length / 2);
    const median = arr[middleIndex];

    return median;
}

// Exemplo de uso:
const numbers = [5, 3, 1, 2, 4];
const result = findMedian(numbers);
console.log(result); // Saída esperada: 3
Esta função findMedian ordena a matriz em ordem crescente usando o método sort e, em seguida, encontra o elemento do meio usando a divisão inteira. Note que esta abordagem funciona bem para listas com um número ímpar de elementos. Se a lista tiver um número par de elementos, você pode adotar diferentes regras para calcular a mediana.

*/




'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'findMedian' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function findMedian(arr) {
    // Write your code here
    arr.sort((a, b) => a - b);
    
    const middleIndex = Math.floor(arr.length / 2);
    const median = arr[middleIndex];

    return median;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = findMedian(arr);

    ws.write(result + '\n');

    ws.end();
}
