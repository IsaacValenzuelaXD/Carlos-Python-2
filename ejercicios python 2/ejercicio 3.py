def calculadora_api(operacion=None, num1=None, num2=None):
    while True:
        try:
            operacion = (int(input("ingrese la operacion que desa hacer: \n 1- Suma \n 2- Resta \n 3- Multiplicacion \n 4- Division \n  5- Fibonacci \n Tu opcion: ")))
            if operacion < 0 or operacion > 5:
                print("opcion no valida")
            else:
                break
        except ValueError:
            print("ingrese un numero del 1 al 5")
    
    while True:
        try:
            num1 = (int(input("ingrese valor de num1:")))
            if num1 < 0:
                print("no puede ser numero negativo")
            else:
                break
        except ValueError:
            print("ingrese un numero valido")
            
    while True:
        try:
            num2 = (int(input("ingrese valor de num1:")))
            if num2 < 0:
                print("no puede ser numero negativo")
            else:
                break
        except ValueError:
            print("ingrese un numero valido")

    # -------------------------
    # OPERACIONES BÁSICAS
    # -------------------------
    if operacion == 1:
        resultado = num1 + num2
        print(f"el resultado de la suma entre {num1} + {num2} = {resultado}")

    elif operacion == 2:
        resultado = num1 - num2
        print(f"el resultado de la resta entre {num1} - {num2} = {resultado}")

    elif operacion == 3:
        resultado = num1 * num2
        print(f"el resultado de la multiplicacion entre {num1} * {num2} = {resultado}")

    elif operacion == 4:
        if num2 == 0:
            return "Error: División entre 0"
        resultado = num1 / num2
        print(f"el resultado de la division entre {num1}  {num2} = {resultado}")

    # -------------------------
    # FIBONACCI
    # -------------------------
    elif operacion == 5:
        n = num1
        a, b = 0, 1
        serie = []

        for _ in range(n):
            serie.append(a)
            a, b = b, a + b

        print(serie)

    else:
        print("Operación no válida")

    # -------------------------
    # CONVERSIÓN DE BASES
    # -------------------------
    if resultado is not None:
        print("-" * 20)
        print(f"Resultado Decimal: {resultado}")
        print(f"Binario: {bin(int(resultado))}")
        print(f"Hexadecimal: {hex(int(resultado))}")
        
calculadora_api()