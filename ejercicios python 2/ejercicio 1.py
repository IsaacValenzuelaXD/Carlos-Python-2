def Health_Check(latencia,uso_cpu,estado_db):
    return latencia <200 and uso_cpu <80 and estado_db


while True:
    try:
        latencia= (int(input("cual es le valor de latencia que tienes?:  ")))
        if latencia < 0:
            print("no puedes agregar numeros negativos")
        else:
            break
        
    except ValueError:
         print("ingrese un numero valido")
    
while True:
    try:
        uso_cpu = (int(input("cual es el porcentaje de uso del cpu (max 100%): ")))
        if uso_cpu < 0 or uso_cpu >100:
            print("el cpu debe tener valores entre 0 y 100")
        else:
            break
    except ValueError:
        print("ingrese un numero valido")

while True:
    estado_db_input = (str(input("Esta conectado a la base de datos? (si/no): "))).lower()
    if estado_db_input == "si":
        estado_db = True
        break
    elif estado_db_input == "no":
        estado_db = False
        break
    else:
         print("solo puede colocar si y no")
            
            
resultado = Health_Check(latencia, uso_cpu, estado_db)

print("Resultado del Health Check:", resultado)