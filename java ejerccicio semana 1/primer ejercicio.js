// calculoGanancia.js

// Solicitar datos al usuario
let precioVenta = parseFloat(prompt("Ingrese el Precio de Venta:"));
let costoFabricacion = parseFloat(prompt("Ingrese el Costo de Fabricación:"));

// Calcular ganancia
let ganancia = precioVenta - costoFabricacion;

// Mostrar resultado
alert("La ganancia neta es: $" + ganancia.toFixed(2));

