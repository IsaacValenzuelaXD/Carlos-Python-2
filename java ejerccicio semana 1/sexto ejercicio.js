// Backend Logístico Dinámico - Node.js

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Seleccione el tipo de vehículo (Pickup, Gandola, Mudanza): ", function(vehiculo) {
    
    rl.question("Ingrese la distancia en kilómetros: ", function(inputDistancia) {

        let distancia = parseFloat(inputDistancia);
        let base;

        // Equivalente a match-case usando switch
        switch (vehiculo) {
            case "Pickup":
                base = 6.00;
                break;
            case "Gandola":
                base = 7.00;
                break;
            case "Mudanza":
                base = 10.00;
                break;
            default:
                console.log("Error: Tipo de vehículo no válido.");
                rl.close();
                return;
        }

        let costoDistancia = distancia * 1.50;
        let total = base + costoDistancia;

        console.log("\n===== REPORTE DE FACTURACIÓN =====");
        console.log(`Vehículo seleccionado: ${vehiculo}`);
        console.log(`Precio base: $${base.toFixed(2)}`);
        console.log(`Costo por distancia (${distancia} km x $1.50): $${costoDistancia.toFixed(2)}`);
        console.log(`TOTAL FACTURADO: $${total.toFixed(2)}`);
        console.log("==================================");

        rl.close();
    });
});
