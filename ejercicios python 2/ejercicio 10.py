def rate_limiter(tipo_usuario, mantenimiento):
    
    # 1️star Prioridad máxima: mantenimiento
    if mantenimiento:
        return 0
    
    # 2️ Si no está en mantenimiento
    if tipo_usuario == "Premium":
        return 1000
    
    elif tipo_usuario == "Standard":
        return 100
    
    else:
        return 0  # tipo desconocido


# -------------------------
# PROGRAMA PRINCIPAL
# -------------------------

tipo = input("Ingresa el tipo de usuario (Premium/Standard): ")
estado = input("¿Servidor en mantenimiento? (True/False): ")

# Convertimos texto a booleano real
mantenimiento = estado == "True"

limite = rate_limiter(tipo, mantenimiento)

print("Límite permitido:", limite)
