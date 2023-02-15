# Exercício 1: Crie um algoritmo não recursivo para contar quantos números
# pares existem em uma sequência numérica (1 a n).


def count_evens(num):
    count = 0
    for n in range(1, num + 1) and num != 0:
        if n % 2 == 0:
            count += 1
    return count
