/*


Neste desafio, a tarefa é depurar o código existente para executar com êxito todos os arquivos de teste fornecidos.

Dadas duas strings consistindo apenas de dígitos 0 e 1, encontre o XOR das duas strings.

Para saber mais sobre XOR clique aqui

Depure a função fornecida strings_xorpara encontrar o XOR das duas strings fornecidas de forma adequada.

Nota: Você pode modificar no máximo três linhas no código fornecido e não pode adicionar ou remover linhas do código.

Para restaurar o código original, clique no ícone à direita do seletor de idioma.

Formato de entrada

A entrada consiste em duas linhas. A primeira linha da entrada contém a primeira string,, e a segunda linha contém a segunda string,.

Restrições

Formato de saída

Imprima a string obtida pelo XOR das duas strings de entrada em uma única linha.

Exemplo de entrada

10101
00101
Saída de amostra

10000
Explicação

O XOR das duas stringseé.



RESOLUCAO:

Aqui está uma versão depurada da função strings_xor em JavaScript:

javascript
Copy code
function strings_xor(s, t) {
    let result = "";
    for (let i = 0; i < s.length; i++) {
        result += (parseInt(s[i]) ^ parseInt(t[i])).toString();
    }
    return result;
}

// Exemplo de uso
const string1 = "10101";
const string2 = "00101";

console.log(strings_xor(string1, string2));
Neste código JavaScript, a função strings_xor realiza a mesma operação XOR bit a bit nas strings fornecidas. Certifique-se de que cada dígito seja tratado como um número inteiro ao realizar a operação XOR. A saída é então exibida no console.



            *********ou*********


Sim, você pode adaptar a função strings_xor para imprimir a resposta no mesmo formato usado com process.stdin. Aqui está um exemplo de como você pode fazer isso:

javascript
Copy code
process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";

process.stdin.on("data", function (chunk) {
    input += chunk;
});

process.stdin.on("end", function () {
    // now we can read/parse input

    // Parse the input into an array of strings
    const inputArray = input.trim().split("\n");

    // Extract the two strings from the array
    const string1 = inputArray[0].trim();
    const string2 = inputArray[1].trim();

    // Call the strings_xor function
    const result = strings_xor(string1, string2);

    // Print the result
    console.log(result);
});

function strings_xor(s, t) {
    let result = "";
    for (let i = 0; i < s.length; i++) {
        result += (parseInt(s[i]) ^ parseInt(t[i])).toString();
    }
    return result;
}
Agora, quando você insere as duas strings usando process.stdin, a saída resultante do XOR será impressa no console. Certifique-se de ajustar conforme necessário para atender aos requisitos específicos do problema ou do ambiente em que você está trabalhando.

*/


// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// var input = "";
// process.stdin.on("data", function (chunk) {
//     input += chunk;
// });
// process.stdin.on("end", function () {
//     // now we can read/parse input
//     // Parse the input into an array of strings
//     const inputArray = input.trim().split("\n");

//     // Extract the two strings from the array
//     const string1 = inputArray[0].trim();
//     const string2 = inputArray[1].trim();

//     // Call the strings_xor function
//     const result = strings_xor(string1, string2);

//     // Print the result
//     console.log(result);
// });

// function strings_xor(s, t) {
//     let result = "";
//     for (let i = 0; i < s.length; i++) {
//         result += (parseInt(s[i]) ^ parseInt(t[i])).toString();
//     }
//     return result;
// }



process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";

process.stdin.on("data", function (chunk) {
    input += chunk;
});

process.stdin.on("end", function () {
   
    const inputArray = input.trim().split("\n");

    const string1 = inputArray[0].trim();
    const string2 = inputArray[1].trim();

    const result = strings_xor(string1, string2);

    console.log(result);
});

function strings_xor(s, t) {
    let result = "";
    for (let i = 0; i < s.length; i++) {
        seInt(s[i]) ^ parseInt(t[i]).toString()
    }
    return result;
}
