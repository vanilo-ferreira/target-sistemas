const prompt = require("prompt-sync")();
let string = prompt("Digite a string para inverter: ");


function invertString(str) {
    let invertedString = "";

    for (let i = str.length - 1; i >= 0; i--) {
        invertedString += str[i];
    }

    return invertedString;
}


let result = invertString(string);
console.log("String original: ", string);
console.log("String invertida: ", result);