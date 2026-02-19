def checksum_payload(mensaje):
    
    suma = 0  # acumulador
    
    for caracter in mensaje:
        suma += ord(caracter)
    
    # Verificar si es par
    if suma % 2 == 0:
        return "Paquete Íntegro"
    else:
        return "Paquete Corrupto"


# -------------------------
# PROGRAMA PRINCIPAL
# -------------------------

mensaje = input("Ingresa el mensaje: ")

resultado = checksum_payload(mensaje)

print("Resultado:", resultado)
