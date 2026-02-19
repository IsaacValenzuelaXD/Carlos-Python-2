const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// -------------------------
// FUNCIÓN PRINCIPAL
// -------------------------
function latencyAuditor(listaTiempos, umbral) {

    // 1️⃣ Calcular promedio
    const suma = listaTiempos.reduce((acc, val) => acc + val, 0);
    const promedio = suma / listaTiempos.length;

    // 2️⃣ Detectar pico extremo
    let picoExtremo = false;

    for (let tiempo of listaTiempos) {
        if (tiempo >= 3 * promedio) {
            picoExtremo = true;
            break;
        }
    }

    // 3️⃣ Condición final
    const alerta = promedio > umbral || picoExtremo;

    return alerta;
}

// -------------------------
// PROGRAMA PRINCIPAL
// -------------------------

rl.question("Ingresa los tiempos separados por comas: ", function(entrada) {

    const listaTiempos = entrada
        .split(",")
        .map(x => parseFloat(x.trim()))
        .filter(x => !isNaN(x));

    rl.question("Ingresa el umbral crítico: ", function(inputUmbral) {

        const umbral = parseFloat(inputUmbral);

        if (isNaN(umbral)) {
            console.log("Umbral inválido");
            rl.close();
            return;
        }

        const resultado = latencyAuditor(listaTiempos, umbral);

        console.log("¿Se activa alerta?:", resultado);

        rl.close();
    });
});
