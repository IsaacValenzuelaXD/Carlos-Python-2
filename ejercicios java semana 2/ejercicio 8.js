const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Calcula si dos nodos están en rango de proximidad (distancia < 10)
 */
function nodeProximity(x1, y1, x2, y2) {
    // 1. Calcular distancia usando Math.sqrt y el operador de exponente (**)
    const distancia = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    
    // 2. Verificar rango (retorna directamente la comparación booleana)
    return distancia < 10;
}

// -------------------------
// PROGRAMA PRINCIPAL
// -------------------------

// Nota: En Node.js, para pedir múltiples datos seguidos usamos callbacks anidados
rl.question("Ingresa x1: ", (arg1) => {
    rl.question("Ingresa y1: ", (arg2) => {
        rl.question("Ingresa x2: ", (arg3) => {
            rl.question("Ingresa y2: ", (arg4) => {
                
                const x1 = parseFloat(arg1);
                const y1 = parseFloat(arg2);
                const x2 = parseFloat(arg3);
                const y2 = parseFloat(arg4);

                if ([x1, y1, x2, y2].some(isNaN)) {
                    console.log("Error: Por favor ingresa solo números válidos.");
                } else {
                    const resultado = nodeProximity(x1, y1, x2, y2);
                    console.log("¿Están en rango de proximidad?:", resultado);
                }

                rl.close();
            });
        });
    });
});