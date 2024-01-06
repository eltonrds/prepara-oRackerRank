/*

Há uma coleção de strings de entrada e uma coleção de strings de consulta. Para cada string de consulta, determine quantas vezes ela ocorre na lista de strings de entrada. Retorne uma matriz dos resultados.

Exemplo

strings=['ab','ab','abc']
querires=['ab','abc','bc']

Háinstâncias de 'ab',1 de 'abc' e 0 de 'bc'. Para cada consulta, adicione um elemento à matriz de retorno, result = [2,1,0].

Descrição da função

Complete a função correspondenteStrings no editor abaixo. A função deve retornar um array de inteiros representando a frequência de ocorrência de cada string de consulta em strings .

matchStrings possui os seguintes parâmetros:

string strings[n] - uma matriz de strings para pesquisar
string queries[q] - uma matriz de strings de consulta
Devoluções

int[q]: uma matriz de resultados para cada consulta
Formato de entrada

A primeira linha contém um número inteiro, o tamanho de.
Cada um dos próximoslinhas contém uma string.
A próxima linha contém, o tamanho de.
Cada um dos próximoslinhas contém uma string.

Restrições



1 < n < 1000
1 < n < 1000
1 < strings[i], queries[i] < 20.







function correspondingStrings(strings, queries) {
    const result = [];

    // Cria um objeto para armazenar a contagem de cada string em strings
    const stringCount = {};

    // Conta a frequência de cada string em strings
    for (const str of strings) {
        stringCount[str] = (stringCount[str] || 0) + 1;
    }

    // Para cada consulta, verifica a contagem correspondente e adiciona ao resultado
    for (const query of queries) {
        result.push(stringCount[query] || 0);
    }

    return result;
}

// Exemplo de uso
const strings = ['ab', 'ab', 'abc'];
const queries = ['ab', 'abc', 'bc'];
const result = correspondingStrings(strings, queries);
console.log(result);  // Saída esperada: [2, 1, 0]


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
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */

function matchingStrings(strings, queries) {
    // Write your code here
    const result = [];
    
    const stringCount = {};
    
    for (const str of strings) {
        stringCount[str] = (stringCount[str] || 0) + 1;
    }
    
    for (const query of queries) {
        result.push(stringCount[query] || 0);
    }
    
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const stringsCount = parseInt(readLine().trim(), 10);

    let strings = [];

    for (let i = 0; i < stringsCount; i++) {
        const stringsItem = readLine();
        strings.push(stringsItem);
    }

    const queriesCount = parseInt(readLine().trim(), 10);

    let queries = [];

    for (let i = 0; i < queriesCount; i++) {
        const queriesItem = readLine();
        queries.push(queriesItem);
    }

    const res = matchingStrings(strings, queries);

    ws.write(res.join('\n') + '\n');

    ws.end();
}
