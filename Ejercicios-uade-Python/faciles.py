#6
"""
gano = "no"

uno = (input(" es 2+2 = 4?: "))

if uno == "si":

    dos = (input("es 3+2 = 10?: "))

    if dos == "no":

        tres = (input(" 5+2 = 7: "))

        if tres == "si":
            gano = "si"
            print("Ganaste! :)")


if gano == "no":
    print("Perdiste :(")

"""
#7
# manera 1

a = int(input("Ingrese numero A: "))

b = int(input("Ingrese numero B: "))
if b == a: 
    b = int(input("Lo siento, B tiene que ser distinto de A. Ingrese numero B: "))

c = int(input("ingrese numero C: "))
if c == a or c == b:
    c = int(input("Lo siento, C tiene que ser distinto de A o de B. Ingrese numero C: "))

if a > b and a > c:
    print("El numero mas grande es:",a)

elif b > a and b > c:
    print("El numero mas grande es:",b)

else:
    print("El numero mas grande es:",c)


# manera 2
a = int(input("Ingrese numero A: "))


b = int(input("Ingrese numero B: "))
if b == a: 
    b = int(input("Lo siento, B tiene que ser distinto de A. Ingrese numero B: "))


c = int(input("ingrese numero C: "))
if c == a or c == b:
    c = int(input("Lo siento, C tiene que ser distinto de A o de B. Ingrese numero C: "))

if b < a and c < a:
    print("El numero mas grande es:",a)

elif a < b and c < b:
    print("El numero mas grande es:",b)

else:
    print("El numero mas grande es:",c)


#manera 3

a = int(input("Ingrese numero A: "))
nummasgrande = a

b = int(input("Ingrese numero B: "))
if b == a: 
    b = int(input("Lo siento, B tiene que ser distinto de A. Ingrese numero B: "))

if b > nummasgrande:
    nummasgrande = b

c = int(input("ingrese numero C: "))
if c == a or c == b:
    c = int(input("Lo siento, C tiene que ser distinto de A o de B. Ingrese numero C: "))

if c > nummasgrande:
    nummasgrande = c


print("El numero mas grande es:", nummasgrande)


# Manera 4?

n1=int(input("Ingrese el numero a:"))
n2=int(input("Ingrese el numero b:"))
n3=int(input("Ingrese el numero c:"))
if n1>(n2&n3):
  print("el mayor es: ", n1)
if n2>(n1&n3):
  print("el mayor es: ", n2)
if n3>(n2&n1):
  print("el mayor es:", n3)




