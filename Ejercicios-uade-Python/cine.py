#dale dale dale, actitud.

#Supongamos que el precio de cada entrada es de 1000

butacas = 5
cantbutacasvendidas = 0
contadoroperacion = 0
precio = 0
total_money_recaudado = 0


while butacas > 0:

    print("Hola! quedan", butacas, "Butacas libres.")

    cantbutacasvendidas = int(input("Ingrese la cantidad de butacas que quiere comprar: "))
    while cantbutacasvendidas > butacas or cantbutacasvendidas <= 0:
        cantbutacasvendidas = 0
        cantbutacasvendidas = int(input("Lo siento, esa operacion no es posible. Ingrese la cantidad de butacas que quiere comprar: "))
    
    efectivo = input("¿Abonara en efectivo? (SI o NO): ")

    cupon = input("Ingrese si posee un codigo de descuento: ")

    if efectivo == "SI" and cupon != "UADE":
        precio = (cantbutacasvendidas*1000)*0.85
    
    elif efectivo == "SI" and cupon == "UADE":
        precio = (cantbutacasvendidas*1000)*0.80
    
    elif efectivo != "SI" and cupon == "UADE":
        precio = (cantbutacasvendidas*1000)*0.95

    else:
        precio = (cantbutacasvendidas*1000)

    print("Usted debera abonar: $",precio, "¡Gracias!" )

    total_money_recaudado = total_money_recaudado + precio

    contadoroperacion = contadoroperacion + 1

    
    butacas = butacas - cantbutacasvendidas

print("se vendieron todas las butacas")

promedio_cant_butacas_vendidas_por_operacion = 5 / contadoroperacion

print ("Se vendieron,", promedio_cant_butacas_vendidas_por_operacion, "entradas por operacion aproximadamente. (Promedio)")

print("Se recaudo en total: $", total_money_recaudado)