
let code = [];
const codeLines = [
    [21, 1, 2, 4, 5, 6, 7], //line-0
    [8, 9, 10, 11, 12, 13, 14], //line-1
    [15, 2, 9, 16, 17, 1, 18], //line-2
    [12, 1, 3, 10, 23, 19, 20], //line-3
    [21, 20, 4, 9, 18, 22, 19], //line-4
    [11, 16, 22, 4, 15, 8, 20] //line-5
];

// 1. Estraggo un numero casuale da 0 a 5 che definisce la linea da selezionare
let line = codeLines[Math.floor(Math.random() * codeLines.length)];

// 2. Estraggo 4 numeri casuali in base alla lunghezza della linea e li pusho nella variabile code
while(code.length < 4){
    let x = Math.floor(Math.random() * line.length);

    if(!code.includes(line[x])){
        code.push(line[x])
    }
}

// 3. Crypto il Codice
// let cryptedCode = [];

for(let i=0; i<code.length; i++){
    // cryptedCode.push(`<img src="symbols/${code[i]}.svg" alt="">`);

    document.getElementById('code').innerHTML += `<img src="symbols/${code[i]}.svg" alt="">`;
}

// Console Check
console.log(line);
console.log(code);