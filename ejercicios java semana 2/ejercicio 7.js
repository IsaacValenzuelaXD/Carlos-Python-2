const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Calcula el tiempo de espera usando la secuencia de Fibonacci
 * @param {number} n - El número de reintento
 * @returns {number} - Segundos a esperar
 */
function backoffFibonacci(n) {
    if (n <= 0) {
        return 0;
    }
    
    if (n === 1 || n === 2) {
        return 1;
    }
    
    // Serie inicial [1, 1]
    let serie = [1, 1];
    
    // Generar hasta el intento n
    for (let i = 2; i < n; i++) {
        let siguiente = serie[i - 1] + serie[i - 2];
        serie.push(siguiente);
    }
    
    // Retornamos el último valor calculado
    return serie[n - 1];
}

// -------------------------
// PROGRAMA PRINCIPAL
// -------------------------

rl.question("Ingresa el número de reintento: ", (input) => {
    const intento = parseInt(input);

    if (isNaN(intento)) {
        console.log("Por favor, ingresa un número válido.");
    } else {
        const tiempoEspera = backoffFibonacci(intento);
        console.log(`El sistema debe esperar ${tiempoEspera} segundos antes de reintentar.`);
    }

    rl.close();
});