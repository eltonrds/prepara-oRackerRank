/*

Dado um tempo emformato AM/PM de -horas , converta-o para o horário militar (24 horas).

Observação: - 12h00 em um relógio de 12 horas é 00h00 em um relógio de 24 horas.
- 12h00 em um relógio de 12 horas é 12h00 em um relógio de 24 horas.

Exemplo


Retornar '12:01:00'.


Retorne '00:01:00'.

Descrição da função

Complete a função timeConversion no editor abaixo. Deve retornar uma nova string representando a hora de entrada no formato de 24 horas.

timeConversion tem os seguintes parâmetros:

string s : um tempo emformato de hora
Devoluções

string : o tempo emformato de hora
Formato de entrada

Uma única cordaque representa um momento em- formato de relógio de hora (ou seja:ou).

Restrições

Todos os tempos de entrada são válidos
Exemplo de entrada

07:05:45PM
Saída de amostra

19:05:45


Essa função divide a string de tempo em partes (hora, minuto, segundo e período), converte a hora para o formato de 24 horas e, em seguida, constrói uma nova string de tempo no formato desejado. Certifique-se de ajustar a entrada conforme necessário.


function timeConversion(s) {
    // Separa as partes da string de tempo
    const timeArray = s.split(':');
    const hour = parseInt(timeArray[0], 10);
    const minute = timeArray[1];
    const second = timeArray[2].substring(0, 2);
    const period = timeArray[2].substring(2);

    // Converte o tempo para o formato de 24 horas
    let militaryHour;

    if (period === 'AM') {
        militaryHour = (hour === 12) ? '00' : (hour < 10 ? '0' + hour : hour);
    } else {
        militaryHour = (hour === 12) ? '12' : (hour + 12);
    }

    // Constrói a nova string de tempo
    const militaryTime = militaryHour + ':' + minute + ':' + second;

    return militaryTime;
}

// Exemplo de uso
const inputTime = '07:05:45PM';
const outputTime = timeConversion(inputTime);
console.log(outputTime);  // Saída esperada: 19:05:45



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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    
    const timeArray = s.split(':');
    const hour = parseInt(timeArray[0], 10);
    const minute = timeArray[1];
    const second = timeArray[2].substring(0, 2);
    const period = timeArray[2].substring(2);
    
    let militaryHour;

    if (period === 'AM') {
        militaryHour = (hour === 12) ? '00' : (hour < 10 ? '0' + hour : hour);
    } else {
        militaryHour = (hour === 12) ? '12' : (hour + 12);
    }
    
    const militaryTime = militaryHour + ':' + minute + ':' + second;

    return militaryTime;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
