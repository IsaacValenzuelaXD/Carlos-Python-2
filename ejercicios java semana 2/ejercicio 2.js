function clasificarTriangulo() {

    const readline = require("readline");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function pedirAngulo(mensaje, callback) {
        rl.question(mensaje, function(respuesta) {
            let valor = parseInt(respuesta);

            if (isNaN(valor)) {
                console.log("Ingrese un número válido");
                return pedirAngulo(mensaje, callback);
            }

            if (valor < 0) {
                console.log("No puede ser un valor negativo");
                return pedirAngulo(mensaje, callback);
            }

            callback(valor);
        });
    }

    pedirAngulo("Ingrese valor de a1: ", function(a1) {
        pedirAngulo("Ingrese valor de a2: ", function(a2) {
            pedirAngulo("Ingrese valor de a3: ", function(a3) {

                // 1️⃣ Validar suma
                if (a1 + a2 + a3 !== 180) {
                    console.log("No es un triángulo válido");
                    rl.close();
                    return;
                }

                let tipo = "";

                // 2️⃣ Clasificación por igualdad
                if (a1 === a2 && a2 === a3) {
                    tipo = "Triángulo Equilátero";
                } else if (a1 === a2 || a1 === a3 || a2 === a3) {
                    tipo = "Triángulo Isósceles";
                } else {
                    tipo = "Triángulo Escaleno";
                }

                // 3️⃣ Verificar ángulo recto
                if (a1 === 90 || a2 === 90 || a3 === 90) {
                    tipo += " y Rectángulo";
                }

                console.log("Resultado:", tipo);
                rl.close();
            });
        });
    });
}

// Ejecutar función
clasificarTriangulo();
