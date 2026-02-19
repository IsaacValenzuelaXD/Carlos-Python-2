import math

def node_proximity(x1, y1, x2, y2):
    
    # 1️ Calcular distancia
    distancia = math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
    
    # 2️ Verificar rango
    if distancia < 10:
        return True
    else:
        return False


# -------------------------
# PROGRAMA PRINCIPAL
# -------------------------

x1 = float(input("Ingresa x1: "))
y1 = float(input("Ingresa y1: "))
x2 = float(input("Ingresa x2: "))
y2 = float(input("Ingresa y2: "))

resultado = node_proximity(x1, y1, x2, y2)

print("¿Están en rango de proximidad?:", resultado)
