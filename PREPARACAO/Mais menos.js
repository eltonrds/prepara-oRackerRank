/*
Dado um array de números inteiros, calcule as proporções de seus elementos que são positivos , negativos e zero . Imprima o valor decimal de cada fração em uma nova linha comcasas após a vírgula.

Nota: Este desafio apresenta problemas de precisão. Os casos de teste são escalonados com seis casas decimais, porém respostas com erro absoluto de atésão aceitáveis.

Exemplo

Háelementos, dois positivos, dois negativos e um zero. Suas proporções são,e. Os resultados são impressos como:

0.400000
0.400000
0.200000
Descrição da função

Complete a função plusMinus no editor abaixo.

plusMinus possui os seguintes parâmetros:

int arr[n] : uma matriz de inteiros
Imprimir
Imprime as proporções de valores positivos, negativos e zero na matriz. Cada valor deve ser impresso em uma linha separada comalgarismos após a vírgula. A função não deve retornar um valor.

Formato de entrada

A primeira linha contém um número inteiro,, o tamanho da matriz.
A segunda linha contéminteiros separados por espaço que descrevem.

Restrições



Formato de saída

Imprima o seguintelinhas, cada uma paradecimais:

proporção de valores positivos
proporção de valores negativos
proporção de zeros
Exemplo de entrada

STDIN           Function
-----           --------
6               arr[] size n = 6
-4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
Saída de amostra

0.500000
0.333333
0.166667
Explicação

Hánúmeros positivos,números negativos, ezero na matriz.
As proporções de ocorrência são positivas: , negativo: e zeros: .
*/


'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here

    const n = arr.length;
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;

    // Conta a quantidade de números positivos, negativos e zeros
    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            positiveCount++;
        } else if (arr[i] < 0) {
            negativeCount++;
        } else {
            zeroCount++;
        }
    }

    // Calcula as proporções
    const positiveRatio = positiveCount / n;
    const negativeRatio = negativeCount / n;
    const zeroRatio = zeroCount / n;

    // Imprime as proporções com seis casas decimais
    console.log(positiveRatio.toFixed(6));
    console.log(negativeRatio.toFixed(6));
    console.log(zeroRatio.toFixed(6));

}


function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
