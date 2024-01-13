/*

Sean inventou um jogo envolvendo um 2n * 2n 
matriz onde cada célula da matriz contém um número inteiro. 
Ele pode reverter qualquer uma de suas linhas ou colunas quantas vezes quiser. O objetivo do jogo é maximizar a soma dos elementos do n * n
submatriz localizada no quadrante superior esquerdo da matriz.Dadas as configurações iniciais para q matrizes, ajude Sean a reverter as linhas e colunas de cada matriz da melhor maneira possível para que a soma dos elementos no quadrante superior esquerdo da matriz seja máxima.

matrix = [[1,2],[3,4]]

1 2
3 4

isso e 2*2 3 quere,os maximizar o quadrante superior esquerdon , um 1*1 matriz . linha reversa 1: 
1 2
4 3



e agora invrta aa coluna ():
4 2 
1 3

a soma maxima é 4




Para resolver esse problema, você pode seguir os seguintes passos:

Inverta as linhas para maximizar os elementos na primeira coluna.
Inverta as colunas para maximizar os elementos na primeira linha.
Calcule a soma dos elementos no quadrante superior esquerdo da matriz resultante.
Aqui está uma implementação em JavaScript:

javascript
Copy code
function maximizeSubmatrix(matrix) {
    const n = matrix.length;
    
    // Passo 1: Inverter as linhas
    for (let i = 0; i < n / 2; i++) {
        [matrix[i], matrix[n - 1 - i]] = [matrix[n - 1 - i], matrix[i]];
    }
    
    // Passo 2: Inverter as colunas
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n / 2; j++) {
            [matrix[i][j], matrix[i][n - 1 - j]] = [matrix[i][n - 1 - j], matrix[i][j]];
        }
    }
    
    // Passo 3: Calcular a soma do quadrante superior esquerdo
    let sum = 0;
    for (let i = 0; i < n / 2; i++) {
        for (let j = 0; j < n / 2; j++) {
            sum += matrix[i][j];
        }
    }
    
    return sum;
}

// Exemplo de uso:
const matrix = [
    [1, 2],
    [3, 4]
];

const result = maximizeSubmatrix(matrix);
console.log(result); // Saída esperada: 4
Esta função maximizeSubmatrix realiza as operações de inversão de linha e coluna conforme descrito e, em seguida, calcula a soma dos elementos no quadrante superior esquerdo da matriz resultante.
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
 * Complete the 'flippingMatrix' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 */

function flippingMatrix(matrix) {
    // Write your code here
    const n = matrix.length;
    
     for (let i = 0; i < n / 2; i++) {
        [matrix[i], matrix[n - 1 - i]] = [matrix[n - 1 - i], matrix[i]];
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n / 2; j++) {
            [matrix[i][j], matrix[i][n - 1 - j]] = [matrix[i][n - 1 - j], matrix[i][j]];
        }
    }
    let sum = 0;
    for (let i = 0; i < n / 2; i++) {
        for (let j = 0; j < n / 2; j++) {
            sum += matrix[i][j];
        }
    }
    return sum;
    
}

const matrix = [
    [1, 2],
    [3, 4]
];

const result = flippingMatrix(matrix);
console.log(result);

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine().trim(), 10);

        let matrix = Array(2 * n);

        for (let i = 0; i < 2 * n; i++) {
            matrix[i] = readLine().replace(/\s+$/g, '').split(' ').map(matrixTemp => parseInt(matrixTemp, 10));
        }

        const result = flippingMatrix(matrix);

        ws.write(result + '\n');
    }

    ws.end();
}
