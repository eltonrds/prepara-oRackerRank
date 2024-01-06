/*Dada uma matriz quadrada, calcule a diferença absoluta entre as somas de suas diagonais.

Por exemplo, a matriz quadradaé mostrado abaixo:

1 2 3
4 5 6
9 8 9  
A diagonal da esquerda para a direita =. A diagonal da direita para a esquerda =. Sua diferença absoluta é.

Descrição da função

Complete afunção no editor abaixo.

diagonalDifference usa o seguinte parâmetro:

int arr[n][m] : uma matriz de inteiros
Retornar

int : a diferença diagonal absoluta
Formato de entrada

A primeira linha contém um único número inteiro,, o número de linhas e colunas na matriz quadrada.
Cada um dos próximoslinhas descreve uma linha,, e consiste eminteiros separados por espaço.

Restrições

Formato de saída

Retorne a diferença absoluta entre as somas das duas diagonais da matriz como um único número inteiro.

Exemplo de entrada

3
11 2 4
4 5 6
10 8 -12
Saída de amostra

15
Explicação

A diagonal primária é:

11
   5
     -12
Soma na diagonal primária: 11 + 5 - 12 = 4

A diagonal secundária é:

     4
   5
10
Soma na diagonal secundária: 4 + 5 + 10 = 19
Diferença: |4 - 19| = 15

Nota: |x| é o valor absoluto de x*/





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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // CODIGO AQUI
    
    const n = arr.length;
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let i = 0; i < n; i++) {
        primaryDiagonalSum += arr[i][i];
        secondaryDiagonalSum += arr[i][n - 1 - i];
    }
    const absoluteDifference = Math.abs(primaryDiagonalSum - secondaryDiagonalSum);

    return absoluteDifference;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
