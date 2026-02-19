def validacion_token(token):
    if len(token) >= 12:
        return True
    elif len(token) <= 12:
        return False
    
    tiene_numero = False
    
    for caracter in token:
        if caracter.isdigit():
            tiene_numero = True
            break
    
    if not tiene_numero:
        return False
    
    if token.startwith("TEST"):
        return False

    return True


# -------------------------
# PROGRAMA PRINCIPAL
# -------------------------

token_usuario = input("Ingresa el token: ")

resultado = validacion_token(token_usuario)

print("¿Token válido?:", resultado)      