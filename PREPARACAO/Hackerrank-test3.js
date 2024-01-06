/*Alice e Bob criaram, cada um, um problema para o HackerRank. Um revisor avalia os dois desafios, atribuindo pontos em uma escala de 1 a 100 para três categorias: clareza do problema , originalidade e dificuldade .

A classificação para o desafio de Alice é o trigêmeo a = (a[0], a[1], a[2]) e a classificação para o desafio de Bob é o trigêmeo b = (b[0], b[1], b [2]) .

A tarefa é encontrar seus pontos de comparação comparando a[0] com b[0] , a[1] com b[1] e a[2] com b[2] .

Se a[i] > b[i] , então Alice recebe 1 ponto.
Se a[i] < b[i] , então Bob recebe 1 ponto.
Se a[i] = b[i] , então nenhuma pessoa recebe um ponto.
Os pontos de comparação são o total de pontos que uma pessoa ganhou.

Dados a e b , determine seus respectivos pontos de comparação.

Exemplo

uma = [1, 2, 3]
b = [3, 2, 1]
Para elementos *0*, Bob recebe um ponto porque a[0] .
Para os elementos iguais a[1] e b[1] , nenhum ponto é ganho.
Finalmente, para elementos 2 , a[2] > b[2] então Alice recebe um ponto.
A matriz de retorno é [1, 1] com a pontuação de Alice primeiro e a de Bob em segundo.

Descrição da função

Complete a função compareTriplets no editor abaixo.

compareTriplets tem os seguintes parâmetros:

int a[3] : Classificação de desafio de Alice
int b[3] : Classificação de desafio de Bob
Retornar

int[2] : A pontuação de Alice está na primeira posição e a pontuação de Bob está na segunda.
Formato de entrada

A primeira linha contém 3 números inteiros separados por espaço, a[0] , a[1] e a[2] , os respectivos valores no trio a .
A segunda linha contém 3 números inteiros separados por espaço, b[0] , b[1] e b[2] , os respectivos valores no trio b .

Restrições

1 ≤ a[i] ≤ 100
1 ≤ b[i] ≤ 100
Exemplo de entrada 0

5 6 7 
3 6 10
Exemplo de saída 0

1 1
Explicação 0

Neste exemplo:

Agora, vamos comparar cada pontuação individual:

, então Alice recebeapontar.
, então ninguém recebe um ponto.
, então Bob recebeapontar.
A pontuação de comparação de Alice é, e a pontuação de comparação de Bob é. Assim, retornamos o array.

Exemplo de entrada 1

17 28 30 
99 16 8
Exemplo de saída 1

2 1
Explicação 1

Comparando oelementos,então Bob recebe um ponto.
Comparando oeelementos,eentão Alice recebe dois pontos.
A matriz de retorno é.

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
 * Complete a funcao 'compareTriplets' abaixo.
 *
 * Espera-se que a funcao retorne um  INTEGER_ARRAY.
 * a funcao aceita os seguintes parâmetros:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
    let alicePoints = 0;
    let bobPoints =0;
    
    for (let i = 0; i < 3; i++){
        if(a[i] > b[i]) {
            alicePoints++;
        }else if(a[i] < b[i]){
            bobPoints++;
        }
    }
    return[alicePoints, bobPoints];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
