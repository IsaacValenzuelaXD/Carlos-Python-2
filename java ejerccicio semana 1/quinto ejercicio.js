// Solicitar ID por consola
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el ID del registro: ", function(input) {
    
    let N = parseInt(input);

    if (N % 2 === 0) {
        console.log("Servidor A");
    } else {
        console.log("Servidor B");
    }

    rl.close();
});
