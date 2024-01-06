/*TESTE FIZZBUZZ*/

/* complete a funcao fizzBuxx no editor abaixo . fizzBuzz tem os seguintes parâmetros: int n : limite superior de  valores a testar (inclusive) return: none     prints: A funcao deve  imprimir a resposta apropriada para cadad valor i no conjunto {1,2, .. n} em ordem crescente, cada um em uma linha separada.*/





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
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n) {
    // Write your code here
    for(let i = 1; i <= n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }else if(i % 3 === 0){
            console.log("Fizz");
        }else if(i % 5 === 0){
            console.log("Buzz");
        }else {
            console.log(i);
        }
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    fizzBuzz(n);
}
