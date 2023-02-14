def contains_duplicate(numbers):
    numbers.sort()
    previous_number = "not a number"
    for number in numbers:
        if previous_number == number:
            return True
        previous_number = number

    return False


# defina a complexidade para melhor caso, caso medio e pior caso:
# O(n log n) para qualquer caso, tendo em vista que a função .sort() tem
# complexidade maior que o for
