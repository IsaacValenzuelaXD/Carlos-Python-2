def clasificar_triangulo(a1, a2, a3):      

    while True:
        try:
            a1 = (int(input("Ingerse valor de a1:")))
            if a1 <0:
                print("no puede ser un valor negativo")
            else:
                break
        except ValueError:
            print ("ingrese un numero valido")
        
    while True:
        try:
            a2 = int(input("ingrese valor de a2:"))
            if a2 <0:
                print("no puede ser un valor negativo")
            else:
                break
        except ValueError:
            print ("ingrese un numero valido")
            
    while True:
        try:
            a3 = int(input("ingrese valor de a3:"))
            if a3 <0:
                print("no puede ser un valor negativo")
            else:
                break
        except ValueError:
            print ("ingrese un numero valido")
    

        # 1️ Validar suma
    if a1 + a2 + a3 != 180:
        return "No es un triángulo válido"

    tipo = ""

    # 2️ Clasificación por igualdad
    if a1 == a2 == a3:
        tipo = "Triángulo Equilátero"
    elif a1 == a2 or a1 == a3 or a2 == a3:
        tipo = "Triángulo Isósceles"
    else:
        tipo = "Triángulo Escaleno"

    # 3 Verificar ángulo recto
    if a1 == 90 or a2 == 90 or a3 == 90:
        tipo += " y Rectángulo"

    return tipo

print(clasificar_triangulo(0,0,0))
