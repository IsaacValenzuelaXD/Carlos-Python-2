def backoff_fibonacci(n):
    
    if n <= 0:
        return 0
    
    if n == 1 or n == 2:
        return 1
    
    # Serie inicial
    serie = [1, 1]
    
    # Generar hasta el intento n
    for i in range(2, n):
        siguiente = serie[i-1] + serie[i-2]
        serie.append(siguiente)
    
    return serie[n-1]


# -------------------------
# PROGRAMA PRINCIPAL
# -------------------------

intento = int(input("Ingresa el número de reintento: "))

tiempo_espera = backoff_fibonacci(intento)

print(f"El sistema debe esperar {tiempo_espera} segundos antes de reintentar.")
