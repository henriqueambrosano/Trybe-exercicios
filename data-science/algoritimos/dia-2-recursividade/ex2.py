# Exercício 2: Transforme o algoritmo criado no ex1 em recursivo.

def count_evens(num):
    if num == 0:
        return 0
    elif num % 2 == 0:
        return 1 + count_evens(num - 1)
    else:
        return count_evens(num - 1)


test = count_evens(10)

print(test)
