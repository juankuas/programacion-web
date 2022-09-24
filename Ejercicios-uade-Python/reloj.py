# a ver que onda el relojito.... 


hs = 0

min = 0

seg = 0


print("Comienzo")

while hs != 23 and min != 59 and seg !=59:
    print(hs, end=" ")
    print(min, end=" ")
    print(seg)

    seg += 1
    if seg == 59 and min != 59:
        seg = 0
        min = min + 1

    if seg == 59 and min == 59:
        seg = 0
        min = 0
        hs = hs + 1

print("FIN")

    