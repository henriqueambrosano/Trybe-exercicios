# Exercício 5: Escreva um algoritmo recursivo que identifica
# se um número é primo.

def is_prime(num):
    return prime_aux(num, num - 1)


def prime_aux(num, aux):
    if aux > 1:
        if num / aux == num // aux:
            return False
        else:
            return prime_aux(num, aux - 1)
    else:
        return True


test = is_prime(997)

print(test)
