function Health_Check(latencia, uso_cpu, estado_db) {
    return latencia < 200 && uso_cpu < 80 && estado_db;
}

// Para usar input en Node.js
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function preguntarLatencia() {
    rl.question("¿Cuál es el valor de latencia?: ", function(latenciaInput) {
        let latencia = parseInt(latenciaInput);

        if (isNaN(latencia) || latencia < 0) {
            console.log("No puedes agregar números negativos o inválidos.");
            return preguntarLatencia();
        }

        preguntarCPU(latencia);
    });
}

function preguntarCPU(latencia) {
    rl.question("¿Cuál es el porcentaje de uso del CPU (max 100%)?: ", function(cpuInput) {
        let uso_cpu = parseInt(cpuInput);

        if (isNaN(uso_cpu) || uso_cpu < 0 || uso_cpu > 100) {
            console.log("El CPU debe tener valores entre 0 y 100.");
            return preguntarCPU(latencia);
        }

        preguntarDB(latencia, uso_cpu);
    });
}

function preguntarDB(latencia, uso_cpu) {
    rl.question("¿Está conectado a la base de datos? (si/no): ", function(dbInput) {
        dbInput = dbInput.toLowerCase();

        if (dbInput !== "si" && dbInput !== "no") {
            console.log("Solo puedes colocar 'si' o 'no'.");
            return preguntarDB(latencia, uso_cpu);
        }

        let estado_db = dbInput === "si";

        let resultado = Health_Check(latencia, uso_cpu, estado_db);

        console.log("Resultado del Health Check:", resultado);

        rl.close();
    });
}

// Iniciar
preguntarLatencia();
