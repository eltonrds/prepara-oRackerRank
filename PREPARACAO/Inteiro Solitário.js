/* 

Dada uma matriz de inteiros, onde todos os elementos, exceto um, ocorrem duas vezes, encontre o elemento único.

Exemplo

a = [1,2,3,4,3,2,1]

O elemento único é 4.

Descrição da função

Complete a função LoneInteger no editor abaixo.

aloneinteger tem os seguintes parâmetros:

int a[n] : uma matriz de inteiros
Devoluções

int: o elemento que ocorre apenas uma vez
Formato de entrada

A primeira linha contém um único número inteiro,, o número de inteiros na matriz.
A segunda linha contéminteiros separados por espaço que descrevem os valores em.

Restrições

1 < n < 100

É garantido queé um número ímpar e que existe um elemento único.
0 < a[i] < 100, onde 0 <[i] < n.



function loneInteger(a) {
    // Inicializa um objeto para armazenar a contagem de cada elemento
    const elementCount = {};

    // Percorre a matriz e conta a ocorrência de cada elemento
    for (const num of a) {
        elementCount[num] = (elementCount[num] || 0) + 1;
    }

    // Procura e retorna o elemento único
    for (const num in elementCount) {
        if (elementCount[num] === 1) {
            return parseInt(num);
        }
    }

    // Se nenhum elemento único for encontrado, retorna -1 ou outra indicação de erro
    return -1;
}

// Exemplo de uso
const array = [1, 2, 3, 4, 3, 2, 1];
const result = loneInteger(array);
console.log(result);  // Saída esperada: 4


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
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
    // Write your code here
    const elementCount = {};
    
    for (const num of a) {
        elementCount[num] = (elementCount[num] || 0) + 1;
    }
    
    for (const num in elementCount) {
        if (elementCount[num] === 1) {
            return parseInt(num);
        }
    }
    
    return -1;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = lonelyinteger(a);

    ws.write(result + '\n');

    ws.end();
}
