const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// -------------------------
// FUNCIÓN DECIMAL A BINARIO
// -------------------------
function decimalABinario(numero) {
    if (numero === 0) return "0";

    let binario = "";

    while (numero > 0) {
        let residuo = numero % 2;
        binario = residuo.toString() + binario;
        numero = Math.floor(numero / 2);
    }

    return binario;
}

// -------------------------
// FUNCIÓN DECIMAL A HEXADECIMAL
// -------------------------
function decimalAHexadecimal(numero) {
    if (numero === 0) return "0";

    const digitosHex = "0123456789ABCDEF";
    let hexadecimal = "";

    while (numero > 0) {
        let residuo = numero % 16;
        hexadecimal = digitosHex[residuo] + hexadecimal;
        numero = Math.floor(numero / 16);
    }

    return hexadecimal;
}

// -------------------------
// PROGRAMA PRINCIPAL
// -------------------------
rl.question("Ingresa un número decimal: ", function(input) {

    let numero = parseInt(input);

    if (isNaN(numero) || numero < 0) {
        console.log("Ingresa un número válido (positivo)");
        rl.close();
        return;
    }

    let binario = decimalABinario(numero);
    let hexadecimal = decimalAHexadecimal(numero);

    console.log("Binario:", binario);
    console.log("Hexadecimal:", hexadecimal);

    rl.close();
});
