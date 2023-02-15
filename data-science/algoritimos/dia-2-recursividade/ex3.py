# Exercício 3: Crie um algoritmo recursivo que encontre, em uma lista,
# o maior número inteiro.


def maior_num(lista: list):
    size = len(lista)
    if size == 1:
        return lista[0]
    else:
        maior = maior_num(lista[:size - 1])
        return lista[size - 1] if maior < lista[size - 1] else maior


test = maior_num([10, 21, 3000, 4, 57, 400])

print(test)
