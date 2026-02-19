const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un solo carácter: ", function(letra) {

    if (letra.length !== 1) {
        console.log("❌ Error: Debe ingresar exactamente un carácter.");
    } else if ("aeiou".includes(letra.toLowerCase())) {
        console.log("✅ Es una vocal.");
    } else {
        console.log("🔎 No es una vocal.");
    }

    rl.close();
});
