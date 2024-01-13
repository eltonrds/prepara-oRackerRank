/*

Existem dois-matrizes de elementos de inteiros,e. Permutá-los em algunsetal que a relaçãovale para todosonde.

Haveráconsultas que consistem em, , e. Para cada consulta, retorne YESse alguma permutação,satisfazendo a relação existe. Caso contrário, retorne NO.

Exemplo
A = [0,1]
B = [0,2]
K = 1
Um válido A´.B´éA´ = [1,0] eB´= [0,2]: 1+0> 1E3 +2>1. Retornar YES.

Descrição da função

Complete a função twoArrays no editor abaixo. Deve retornar uma string, YESou NO.

twoArrays tem os seguintes parâmetros:

int k: um número inteiro
int A[n]: uma matriz de inteiros
int B[n]: uma matriz de inteiros
Retorna
- string: um YESouNO

Formato de entrada

A primeira linha contém um inteiro, o número de consultas.

Nas próximasconjuntos deas linhas são as seguintes:

A primeira linha contém dois inteiros separados por espaçoe, o tamanho de ambas as matrizesee a variável de relação.
A segunda linha contéminteiros separados por espaço.
A terceira linha contéminteiros separados por espaço.
Restrições

Exemplo de entrada

STDIN       Function
-----       --------
2           q = 2
3 10        A[] and B[] size n = 3, k = 10
2 1 3       A = [2, 1, 3]
7 8 9       B = [7, 8, 9]
4 5         A[] and B[] size n = 4, k = 5
1 2 2 1     A = [1, 2, 2, 1]
3 3 3 4     B = [3, 3, 3, 4]
Saída de amostra

YES
NO
Explicação

Existem duas consultas:

Troque-os porede modo que as seguintes afirmações sejam verdadeiras:

,, e. Para trocaseem um válidoe, deve haver pelo menos três números emque são maiores que.



RESOLUCAO:

Aqui está a implementação da função twoArrays em JavaScript:

javascript
Copy code
function twoArrays(k, A, B) {
    // Ordena as matrizes em ordem crescente
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);

    // Verifica se a relação é satisfeita para cada elemento
    for (let i = 0; i < A.length; i++) {
        if (A[i] + B[i] < k) {
            return 'NO';
        }
    }

    return 'YES';
}

// Exemplo de uso
const queries = 2;
const query1 = { n: 3, k: 10, A: [2, 1, 3], B: [7, 8, 9] };
const query2 = { n: 4, k: 5, A: [1, 2, 2, 1], B: [3, 3, 3, 4] };

console.log(twoArrays(query1.k, query1.A, query1.B)); // YES
console.log(twoArrays(query2.k, query2.A, query2.B)); // NO
Nesta implementação, a função twoArrays recebe o número de consultas (k), as matrizes A e B, ordena ambas as matrizes em ordem crescente e, em seguida, verifica se a relação é satisfeita para cada elemento. Se algum elemento não satisfizer a relação, a função retorna 'NO'. Caso contrário, retorna 'YES'.

Os exemplos de uso demonstram como utilizar a função com duas consultas diferentes e imprimem os resultados correspondentes.

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
 * Complete the 'twoArrays' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 *  3. INTEGER_ARRAY B
 */

function twoArrays(k, A, B) {
    // Write your code here

    // Ordena as matrizes em ordem crescente
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);

    // Verifica se a relação é satisfeita para cada elemento
    for (let i = 0; i < A.length; i++) {
        if (A[i] + B[i] < k) {
            return 'NO';
        }
    }

    return 'YES';

}


// Exemplo de uso
const queries = 2;
const query1 = { n: 3, k: 10, A: [2, 1, 3], B: [7, 8, 9] };
const query2 = { n: 4, k: 5, A: [1, 2, 2, 1], B: [3, 3, 3, 4] };

console.log(twoArrays(query1.k, query1.A, query1.B)); // YES
console.log(twoArrays(query2.k, query2.A, query2.B)); // NO

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const n = parseInt(firstMultipleInput[0], 10);

        const k = parseInt(firstMultipleInput[1], 10);

        const A = readLine().replace(/\s+$/g, '').split(' ').map(ATemp => parseInt(ATemp, 10));

        const B = readLine().replace(/\s+$/g, '').split(' ').map(BTemp => parseInt(BTemp, 10));

        const result = twoArrays(k, A, B);

        ws.write(result + '\n');
    }

    ws.end();
}
