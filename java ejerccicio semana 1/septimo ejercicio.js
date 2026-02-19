// Transacción Validada - Node.js

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el método de pago (Pago Móvil / Tarjeta): ", function(metodo) {

    rl.question("Ingrese la clave de validación: ", function(clave) {

        let esNumerico = /^\d+$/.test(clave); // Verifica que solo tenga números

        if (metodo === "Pago Móvil") {

            if (clave.length === 8 && esNumerico) {
                console.log("✅ Transacción válida. Registro exitoso.");
            } else {
                console.log("❌ Error: Pago Móvil requiere exactamente 8 dígitos numéricos.");
            }

        } else if (metodo === "Tarjeta") {

            if (clave.length === 16 && esNumerico) {
                console.log("✅ Transacción válida. Registro exitoso.");
            } else {
                console.log("❌ Error: Tarjeta requiere exactamente 16 dígitos numéricos.");
            }

        } else {
            console.log("❌ Método de pago no reconocido.");
        }

        rl.close();
    });

});
