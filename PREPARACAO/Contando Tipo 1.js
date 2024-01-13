/*

O Quicksort de classificação por comparação
geralmente tem um tempo de execução de, mas existe um algoritmo que pode classificar ainda mais rápido? Em geral, isso não é possível. A maioria dos algoritmos de ordenação são ordenações por comparação , ou seja, eles ordenam uma lista apenas comparando os elementos entre si. Um algoritmo de classificação por comparação não pode superar(pior caso) tempo de execução, uma vez querepresenta o número mínimo de comparações necessárias para saber onde colocar cada elemento. Para mais detalhes, você pode ver estas notas (PDF).

Classificação alternativa
Outro método de classificação, a classificação por contagem , não requer comparação. Em vez disso, você cria uma matriz de números inteiros cujo intervalo de índice cobre todo o intervalo de valores em sua matriz para classificação. Cada vez que um valor ocorre na matriz original, você incrementa o contador nesse índice. No final, percorra sua matriz de contagem, imprimindo o valor de cada índice com valor diferente de zero esse número de vezes.

Exemplo

Todos os valores estão na faixa, então crie uma matriz de zeros,. Os resultados de cada iteração são os seguintes:

eu 	arr [ i ] 	resultado 
0 	1 	[ 0 ,  1 ,  0 ,  0 ] 
1 	1 	[ 0 ,  2 ,  0 ,  0 ] 
2 	3 	[ 0 ,  2 ,  0 ,  1 ] 
3 	2 	[ 0 ,  2 ,  1 ,  1 ] 
4 	1 	[ 0 ,  3 ,  1 ,  1 ]
A matriz de frequência é. Esses valores também podem ser usados ​​para criar a matriz classificada:.

Nota
Para este exercício, sempre retorne uma matriz de frequência com 100 elementos. O exemplo acima mostra apenas os primeiros 4 elementos, sendo o restante zeros.

Desafio
Dada uma lista de inteiros, conte e retorne o número de vezes que cada valor aparece como uma matriz de inteiros.

Descrição da função

Complete a função countSort no editor abaixo.

countSort tem os seguintes parâmetros:

arr[n]: uma matriz de inteiros
Devoluções

int[100]: uma matriz de frequência
Formato de entrada

A primeira linha contém um inteiro, o número de itens em.
Cada um dos próximoslinhas contém um número inteiroonde.

Restrições



Exemplo de entrada

100 
63  25  73  1  98  73 56 84 86 57 16 83 8 25 81 56 9 53 98 67 99 12 83 89 80 91 39 86 76 85 74 39 25 90 59 10 94 32 44 3 89  30 27 79 46 96 27 32 18 21 92 69 81 40 40 34 68 78 24 87 42 69 23 41 78 22 6 90 99 89 50 30 20 1 43 3 70 95 33 46 44 9 69 48 33 60 65 16 82 67 61 3 2 21 79 75 75 13 87 70 33                                                                                               
Saída de amostra

0  2  0  2  0  0  1  0  1  2  1  0  1 1 0 0 2 0 1 0 1 2 1 1 1 3 0 2 0 0 2 0 3 3 1 0 0 0 0 2 2 1 1 1 2  0 2 0 1 0 1 0 0 1 0 0 2 1 0 1 1 1 0 1 0 1 0 2 1 3 2 0 0 2 1 2 1 0 2 2 1 2 1 2 1 1 2 2 0 3 2 1 1 0 1 1 1 0 2 2                                                                                       
Explicação

Cada um dos valores resultantesrepresenta o número de vezesapareceu em.




resposta:



function countSort(arr) {
    const resultArray = new Array(100).fill(0);

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        resultArray[num]++;
    }

    return resultArray;
}

// Exemplo de uso
const inputArray = [
    63, 25, 73, 1, 98, 73, 56, 84, 86, 57, 16, 83, 8, 25, 81, 56, 9, 53, 98, 67,
    99, 12, 83, 89, 80, 91, 39, 86, 76, 85, 74, 39, 25, 90, 59, 10, 94, 32, 44,
    3, 89, 30, 27, 79, 46, 96, 27, 32, 18, 21, 92, 69, 81, 40, 40, 34, 68, 78,
    24, 87, 42, 69, 23, 41, 78, 22, 6, 90, 99, 89, 50, 30, 20, 1, 43, 3, 70, 95,
    33, 46, 44, 9, 69, 48, 33, 60, 65, 16, 82, 67, 61, 3, 2, 21, 79, 75, 75, 13,
    87, 70, 33
];

const result = countSort(inputArray);
console.log(result.join(' '));

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
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
   
    const resultArray = new Array(100).fill(0);

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        resultArray[num]++;
    }
    return resultArray;
}

const inputArray = [
    63, 25, 73, 1, 98, 73, 56, 84, 86, 57, 16, 83, 8, 25, 81, 56, 9, 53, 98, 67,
    99, 12, 83, 89, 80, 91, 39, 86, 76, 85, 74, 39, 25, 90, 59, 10, 94, 32, 44,
    3, 89, 30, 27, 79, 46, 96, 27, 32, 18, 21, 92, 69, 81, 40, 40, 34, 68, 78,
    24, 87, 42, 69, 23, 41, 78, 22, 6, 90, 99, 89, 50, 30, 20, 1, 43, 3, 70, 95,
    33, 46, 44, 9, 69, 48, 33, 60, 65, 16, 82, 67, 61, 3, 2, 21, 79, 75, 75, 13,
    87, 70, 33
];

const result = countSort(inputArray);
console.log(result.join(' '));

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = countingSort(arr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
