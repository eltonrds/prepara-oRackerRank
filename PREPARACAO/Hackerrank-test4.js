/*Neste desafio, você deverá calcular e imprimir a soma dos elementos de um array, lembrando que alguns desses números inteiros podem ser bem grandes.

Descrição da função

Complete a função aVeryBigSum no editor abaixo. Deve retornar a soma de todos os elementos do array.

aVeryBigSum tem os seguintes parâmetros:

int ar[n] : uma matriz de inteiros.
Retornar

long : a soma de todos os elementos do array
Formato de entrada

A primeira linha da entrada consiste em um número inteiro.
A próxima linha contéminteiros separados por espaço contidos na matriz.

Formato de saída

Retorne a soma inteira dos elementos do array.

Restrições


Exemplo de entrada

5
1000000001 1000000002 1000000003 1000000004 1000000005
Saída

5000000015
Observação:

O intervalo do inteiro de 32 bits é.
Quando adicionamos vários valores inteiros, a soma resultante pode exceder o intervalo acima. Pode ser necessário usar long int C/C++/Java para armazenar essas somas.
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
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

function aVeryBigSum(ar) {
    // Write your code here

    // Use o método reduce para somar todos os elementos do array
    // O segundo parâmetro (0) é o valor inicial da soma
    const sum = ar.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    // Retorna a soma como um número longo
    return BigInt(sum);

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));
}