/*

pangrama é uma string que contém todas as letras do alfabeto. Dada uma frase, determine se ela é um pangrama do alfabeto inglês. Ignorar caso. Retorne pangramou not pangramconforme apropriado.

Exemplo

A string contém todas as letras do alfabeto inglês, então retorne pangram.

Descrição da função

Complete os pangramas de função no editor abaixo. Deve retornar a string pangramse a string de entrada for um pangrama. Caso contrário, deverá retornar not pangram.

pangrams tem os seguintes parâmetros:

string s: uma string para testar
Devoluções

string: ou pangramounot pangram
Formato de entrada

Uma única linha com string.

Restrições


Cada personagem de,

Exemplo de entrada

Exemplo de entrada 0

We promptly judged antique ivory buckles for the next prize

Exemplo de saída 0

pangram

Exemplo de explicação 0

Todas as letras do alfabeto estão presentes na string.

Exemplo de entrada 1

We promptly judged antique ivory buckles for the prize

Exemplo de saída 1

not pangram

Exemplo de explicação 0

A string não possui um x.





resolucao :

function pangrams(s) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    // Converte a string para minúsculas
    s = s.toLowerCase();

    // Verifica se todas as letras do alfabeto estão presentes na string
    for (let char of alphabet) {
        if (!s.includes(char)) {
            return 'not pangram';
        }
    }

    return 'pangram';
}

// Exemplo de uso
const inputString1 = "We promptly judged antique ivory buckles for the next prize";
const inputString2 = "We promptly judged antique ivory buckles for the prize";

console.log(pangrams(inputString1)); // pangram
console.log(pangrams(inputString2)); // not pangram

Nesta implementação, a função pangrams verifica se todas as letras do alfabeto estão presentes na string fornecida. Ela converte a string para minúsculas para evitar problemas de maiúsculas e minúsculas e, em seguida, percorre cada letra do alfabeto verificando se ela está presente na string. Se todas as letras estiverem presentes, a função retorna "pangram", caso contrário, retorna "not pangram".

Os exemplos de uso demonstram como utilizar a função com duas strings diferentes e imprimem os resultados correspondentes.

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
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    // Converte a string para minúsculas
    s = s.toLowerCase();

    // Verifica se todas as letras do alfabeto estão presentes na string
    for (let char of alphabet) {
        if (!s.includes(char)) {
            return 'not pangram';
        }
    }

    return 'pangram';
}

// Exemplo de uso
const inputString1 = "We promptly judged antique ivory buckles for the next prize";
const inputString2 = "We promptly judged antique ivory buckles for the prize";

console.log(pangrams(inputString1)); // pangram
console.log(pangrams(inputString2)); // not pangram


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = pangrams(s);

    ws.write(result + '\n');

    ws.end();
}
