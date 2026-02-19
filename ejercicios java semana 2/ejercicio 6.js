const readline = require('readline');

// Creamos la interfaz para leer la entrada del usuario por consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Función de validación de token
 */
function validacionToken(token) {
    // Nota: He mantenido tu lógica original, pero revisa la sección de abajo
    if (token.length >= 12) {
        return true;
    } else if (token.length <= 12) {
        return false;
    }

    // --- CÓDIGO INALCANZABLE EN TU VERSIÓN ORIGINAL ---
    let tieneNumero = false;

    for (let caracter of token) {
        if (/\d/.test(caracter)) { // Comprueba si es un dígito
            tieneNumero = true;
            break;
        }
    }

    if (!tieneNumero) {
        return false;
    }

    if (token.startsWith("TEST")) {
        return false;
    }

    return true;
}

// -------------------------
// PROGRAMA PRINCIPAL
// -------------------------
rl.question('Ingresa el token: ', (tokenUsuario) => {
    const resultado = validacionToken(tokenUsuario);
    console.log("¿Token válido?:", resultado);
    rl.close();
});