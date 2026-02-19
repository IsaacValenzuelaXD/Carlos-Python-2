const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function preguntar(pregunta) {
    return new Promise(resolve => {
        rl.question(pregunta, respuesta => {
            resolve(respuesta);
        });
    });
}

async function calculadoraAPI() {

    let operacion;

    // -------------------------
    // MENÚ
    // -------------------------
    while (true) {
        let input = await preguntar(
            "Ingrese la operación:\n" +
            "1- Suma\n" +
            "2- Resta\n" +
            "3- Multiplicación\n" +
            "4- División\n" +
            "5- Fibonacci\n" +
            "Tu opción: "
        );

        operacion = parseInt(input);

        if (!isNaN(operacion) && operacion >= 1 && operacion <= 5) {
            break;
        }

        console.log("Opción no válida");
    }

    let num1, num2;

    // -------------------------
    // PEDIR NÚMEROS
    // -------------------------
    while (true) {
        let input = await preguntar("Ingrese valor de num1: ");
        num1 = parseInt(input);

        if (!isNaN(num1) && num1 >= 0) break;

        console.log("Ingrese un número válido (no negativo)");
    }

    while (true) {
        let input = await preguntar("Ingrese valor de num2: ");
        num2 = parseInt(input);

        if (!isNaN(num2) && num2 >= 0) break;

        console.log("Ingrese un número válido (no negativo)");
    }

    let resultado;

    // -------------------------
    // OPERACIONES
    // -------------------------
    if (operacion === 1) {
        resultado = num1 + num2;
        console.log(`Resultado suma: ${resultado}`);
    }

    else if (operacion === 2) {
        resultado = num1 - num2;
        console.log(`Resultado resta: ${resultado}`);
    }

    else if (operacion === 3) {
        resultado = num1 * num2;
        console.log(`Resultado multiplicación: ${resultado}`);
    }

    else if (operacion === 4) {
        if (num2 === 0) {
            console.log("Error: División entre 0");
            rl.close();
            return;
        }

        resultado = num1 / num2;
        console.log(`Resultado división: ${resultado}`);
    }

    else if (operacion === 5) {
        let n = num1;
        let a = 0, b = 1;
        let serie = [];

        for (let i = 0; i < n; i++) {
            serie.push(a);
            [a, b] = [b, a + b];
        }

        console.log("Serie Fibonacci:", serie);
        rl.close();
        return;
    }

    // -------------------------
    // CONVERSIÓN DE BASES
    // -------------------------
    if (resultado !== undefined) {
        console.log("--------------------");
        console.log("Decimal:", resultado);
        console.log("Binario:", Math.trunc(resultado).toString(2));
        console.log("Hexadecimal:", Math.trunc(resultado).toString(16));
    }

    rl.close();
}

// Ejecutar
calculadoraAPI();
