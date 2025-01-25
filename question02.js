// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o 
// próximo valor sempre será a soma dos 2 valores anteriores 
// (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
// escreva um programa na linguagem que desejar onde, 
// informado um número, ele calcule a sequência de Fibonacci 
// e retorne uma mensagem avisando se o número informado pertence 
// ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer 
// entrada de sua preferência ou pode ser previamente definido no código;

const prompt = require("prompt-sync")();
const numberProvided = prompt('Digite um número para verificar se pertence a sequência de Fibonacci: ');

const isNumber = (string) => string == Number.parseFloat(string); 

const validNumber = isNumber(numberProvided);

if (validNumber === false){
    return console.log(`Por favor, digite um número.`);
}

function isFibonacci(number) {
    let a = 0;
    let b = 1;
    let fibonacci = b;

    if (number === a) {
        return true;
    }

    while (fibonacci < number) {
        fibonacci = a + b;
        a = b;
        b = fibonacci;
    }

    return fibonacci === number;
}

let verifiedNumber = isFibonacci(numberProvided);

if (verifiedNumber === true) {
    console.log(`O número ${numberProvided} pertence a sequência de Fibonacci.`);
} else {
    console.log(`O número ${numberProvided} não pertence a sequência de Fibonacci.`);
};