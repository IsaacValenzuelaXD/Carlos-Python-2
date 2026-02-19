def latency_auditor(lista_tiempos, umbral):
    
    # 1️ Calcular promedio
    promedio = sum(lista_tiempos) / len(lista_tiempos)
    
    # 2️ Bandera para detectar picos extremos
    pico_extremo = False
    
    for tiempo in lista_tiempos:
        if tiempo >= 3 * promedio:
            pico_extremo = True
            break
    
    # 3 Condición final de alerta
    alerta = promedio > umbral or pico_extremo
    
    return alerta


# -------------------------
# PROGRAMA PRINCIPAL
# -------------------------

# Pedir lista al usuario
entrada = input("Ingresa los tiempos de respuesta separados por comas: ")
lista_tiempos = [float(x) for x in entrada.split(",")]

umbral = float(input("Ingresa el umbral crítico: "))

resultado = latency_auditor(lista_tiempos, umbral)

print("¿Se activa alerta?:", resultado)
