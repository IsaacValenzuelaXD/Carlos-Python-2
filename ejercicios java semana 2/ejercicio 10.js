const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Determina el límite de peticiones permitido según el perfil y estado del servidor.
 * @param {string} tipoUsuario - "Premium" o "Standard"
 * @param {boolean} mantenimiento - Estado del servidor
 * @returns {number} - Cantidad de peticiones permitidas
 */
function rateLimiter(tipoUsuario, mantenimiento) {
    
    // 1. Prioridad máxima: si hay mantenimiento, el límite es 0
    if (mantenimiento) {
        return 0;
    }
    
    // 2. Lógica por tipo de cuenta
    if (tipoUsuario === "Premium") {
        return 1000;
    } else if (tipoUsuario === "Standard") {
        return 100;
    } else {
        return 0; // Tipo desconocido o invitado
    }
}

// -------------------------
// PROGRAMA PRINCIPAL
// -------------------------

rl.question("Ingresa el tipo de usuario (Premium/Standard): ", (tipo) => {
    rl.question("¿Servidor en mantenimiento? (true/false): ", (estado) => {
        
        // Convertimos el texto ingresado a un booleano real
        // .toLowerCase() ayuda a que acepte "True", "true" o "TRUE"
        const mantenimiento = estado.toLowerCase() === "true";

        const limite = rateLimiter(tipo, mantenimiento);

        console.log(`Límite permitido: ${limite}`);

        rl.close();
    });
});