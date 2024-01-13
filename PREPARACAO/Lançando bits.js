/*

Você receberá uma lista de inteiros sem sinal de 32 bits. Vire todos os bits (1 => 0 e 0 => 1) e retorne o resultado como um número inteiro sem sinal.

Exemplo

n= 9/10
9/10 = 1001/2 

. Estamos trabalhando com 32 bits, então:
0000000000000000000000000000000001001/2 = 9/10
1111111111111111111111111111111110110/2 = 429467286/10

Retornar 4294967286.

Descrição da função

Complete a função flippingBits no editor abaixo.

flippingBits tem os seguintes parâmetros:

int n: um número inteiro
Devoluções

int: o resultado inteiro decimal sem sinal
Formato de entrada

A primeira linha da entrada contém, o número de consultas.
Cada um dos próximoslinhas contêm um número inteiro,, para processar.


function flippingBits(n) {
   
        // Usamos o operador bitwise XOR com 2^32 - 1 para inverter todos os bits

    const flippedResult = n ^ 0xFFFFFFFF;
    return flippedResult >>> 0; // Garante que o resultado seja tratado como um inteiro não assinado

}

// Exemplo de uso
const queries = [2147483647, 1, 0];
for (const query of queries) {
    const result = flippingBits(query);
    console.log(result);
}


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
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

function flippingBits(n) {
    const flippedResult = n ^ 0xFFFFFFFF;
    return flippedResult >>> 0;
}

const queries = [2147483647, 1, 0];
for (const query of queries) {
    const result = flippingBits(query);
    console.log(result);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine().trim(), 10);

        const result = flippingBits(n);

        ws.write(result + '\n');
    }

    ws.end();
}

