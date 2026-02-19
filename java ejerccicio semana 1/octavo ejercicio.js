// Lista original en Celsius (float)
const celsius = [0.0, 25.5, 30.0, 15.2];

// Nueva lista para Fahrenheit
let fahrenheit = [];

for (let i = 0; i < celsius.length; i++) {
    let conversion = (celsius[i] * 9 / 5) + 32;
    fahrenheit.push(conversion);
}

console.log("Celsius original:", celsius);
console.log("Fahrenheit convertido:", fahrenheit);
