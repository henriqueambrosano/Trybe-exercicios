# Exercício 4: Escreva um algoritmo recursivo para encontrar o
# máximo divisor comum (mdc) de dois inteiros.

def mdc(n1, n2):
    start = n1 if n1 < n2 else n2
    result = aux_mdc(n1, n2, start)
    return result


def aux_mdc(n1, n2, start):
    if n1 / start == n1 // start and n2 / start == n2 // start:
        return start
    else:
        return aux_mdc(n1, n2, start - 1)


test = mdc(15, 9)
print(test)
