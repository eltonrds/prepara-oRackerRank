/*

Duas crianças, Lily e Ron, querem dividir uma barra de chocolate. Cada um dos quadrados contém um número inteiro.

Lily decide compartilhar um segmento contíguo da barra selecionado de forma que:

A duração do segmento corresponde ao mês de nascimento de Ron e,
A soma dos números inteiros nos quadrados é igual ao dia do seu nascimento.
Determine de quantas maneiras ela pode dividir o chocolate.

Exemplo



Lily quer encontrar segmentos resumindo o dia do aniversário de Ron,com duração igual ao mês de seu nascimento,. Nesse caso, existem dois segmentos que atendem aos seus critérios:e.

Descrição da função

Complete a função de aniversário no editor abaixo.

aniversário tem os seguintes parâmetros:

int s[n]: os números em cada um dos quadrados de chocolate
int d: dia do aniversário de Ron
int m: mês de nascimento de Ron
Devoluções

int: o número de maneiras que a barra pode ser dividida
Formato de entrada

A primeira linha contém um inteiro, o número de quadrados na barra de chocolate.
A segunda linha contéminteiros separados por espaço, os números nos quadrados de chocolate onde.
A terceira linha contém dois inteiros separados por espaço,e, o dia de nascimento de Ron e seu mês de nascimento.

Restrições


Aqui está uma implementação em JavaScript da função birthday:

javascript
Copy code
function birthday(s, d, m) {
    let count = 0;

    for (let i = 0; i <= s.length - m; i++) {
        let sum = 0;
        for (let j = i; j < i + m; j++) {
            sum += s[j];
        }
        if (sum === d) {
            count++;
        }
    }

    return count;
}

// Exemplo de uso:
const chocolateSquares = [1, 2, 1, 3, 2];
const day = 3;
const month = 2;

const result = birthday(chocolateSquares, day, month);
console.log(result);
Essa função percorre os quadrados de chocolate, considerando segmentos de tamanho m (mês de nascimento) e verifica se a soma dos números nesses segmentos é igual ao dia de nascimento (d). A cada correspondência, incrementa o contador.

Note que essa solução pode não ser eficiente para entradas grandes, pois possui complexidade O(n * m). Existem abordagens mais eficientes, mas esta é uma solução simples e fácil de entender.
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



function birthday(s, d, m) {
    let count = 0;

        for (let i = 0; i <= s.length - m; i++) {
            let sum = 0;
            for (let j = i; j < i + m; j++) {
                sum += s[j];
            }
            if (sum === d) {
                count++;
            }
        }
        return count;
}

// Exemplo de uso:

const chocolateSquares = [1, 2, 1, 3, 2];
const day = 3;
const month = 2;

const result = birthday(chocolateSquares, day, month);
console.log(result);

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const d = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const result = birthday(s, d, m);

    ws.write(result + '\n');

    ws.end();
}
