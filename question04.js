// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  

const states = [
    {
        "UF": "SP",
        "value": 67836.43
    },
    {
        "UF": "RJ",
        "value": 36678.66
    },
    {
        "UF": "MG",
        "value": 29229.88
    },
    {
        "UF": "ES",
        "value": 27165.48
    },
    {
        "UF": "Outros",
        "value": 19849.53
    },
]; 

let invoicing = 0;
let percentage = 0;


for (let i = 0; i < states.length; i++) {
    invoicing = invoicing + states[i].value;
}

percentage = invoicing/100;


console.log(`O percentual de representação de SP é ${((states[0].value * 100)/invoicing).toFixed(2)};`);
console.log(`O percentual de representação de RJ é ${((states[1].value * 100)/invoicing).toFixed(2)};`);
console.log(`O percentual de representação de MG é ${((states[2].value * 100)/invoicing).toFixed(2)};`);
console.log(`O percentual de representaçãode ES é ${((states[3].value * 100)/invoicing).toFixed(2)};`);
console.log(`O percentual de representação dos outros estados é ${((states[4].value * 100)/invoicing).toFixed(2)}.`);