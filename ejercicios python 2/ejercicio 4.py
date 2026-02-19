def decimal_a_binario(numero):
    if numero == 0:
        return "0"

    binario = ""
    while numero > 0:
        residuo = numero % 2
        binario = str(residuo) + binario
        numero = numero // 2

    return binario


def decimal_a_hexadecimal(numero):
    if numero == 0:
        return "0"

    digitos_hex = "0123456789ABCDEF"
    hexadecimal = ""

    while numero > 0:
        residuo = numero % 16
        hexadecimal = digitos_hex[residuo] + hexadecimal
        numero = numero // 16

    return hexadecimal


# -------------------------
# PROGRAMA PRINCIPAL
# -------------------------

numero = int(input("Ingresa un número decimal: "))

binario = decimal_a_binario(numero)
hexadecimal = decimal_a_hexadecimal(numero)

print("Binario:", binario)
print("Hexadecimal:", hexadecimal)
