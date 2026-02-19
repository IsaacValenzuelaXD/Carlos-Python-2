const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Calcula un checksum simple basado en la paridad de la suma de los caracteres
 * @param {string} mensaje 
 * @returns {string}
 */
function checksumPayload(mensaje) {
    let suma = 0; // acumulador

    // En JS podemos iterar directamente sobre el string con for...of
    for (let caracter of mensaje) {
        // charCodeAt(0) es el equivalente a ord() de Python
        suma += caracter.charCodeAt(0);
    }

    // Verificar si es par
    if (suma % 2 === 0) {
        return "Paquete Íntegro";
    } else {
        return "Paquete Corrupto";
    }
}

// -------------------------
// PROGRAMA PRINCIPAL
// -------------------------

rl.question("Ingresa el mensaje: ", (mensaje) => {
    const resultado = checksumPayload(mensaje);
    
    console.log("Resultado:", resultado);
    
    rl.close();
});