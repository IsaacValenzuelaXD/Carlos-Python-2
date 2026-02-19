function esNumeroPerfecto(numero) {

    if (numero <= 0 || !Number.isInteger(numero)) {
        return false;
    }

    let sumaDivisores = 0;

    for (let i = 1; i <= numero / 2; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }

    return sumaDivisores === numero;
}
