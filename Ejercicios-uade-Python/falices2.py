# ej 6

promedio = 0
sumasnum = 0
cont = 1
max = None #esto de asingarle un None a las variables es "buena costumbre", para hacer el programa mas "tocho"
min = None
num = 10 #10 porque pinto, aca podes poner cualquier numero, total desp se va a reescribir la variable.

while num != 0: #arranca el bucle.

    num = int(input("ingrese un numero entero: "))

    if max == None:
        max = num

    if min == None:
        min = num
    #esto aca de asignare un valor numerico a "MAX Y MIN", es clave pq sino desp no podes comparar valores con comandos matematicos.

    if num < min and num != 0:
        min = num

    if num > max and num != 0:
        max = num

    sumasnum = sumasnum + num

    cont += 1
    #supongo que esto lo entendes.

promedio = sumasnum / cont

if max != 0:
    print("El numero maximo ingresado fue:", max)

if min != 0:
    print("El numero mas pequeño ingresado fue:", min)

#atenti aca con estos ifs, son importantes

print("El promedio de todos los numeros ingresados fue:", promedio)



    

