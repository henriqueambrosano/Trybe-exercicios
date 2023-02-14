# funcao que recebe uma lista bidimensional e retorna true caso as cordenadas(x, y) passadas contenham um navio(valor diferente de 1)

entrada = [ [0 0 0 0 1],
            [0 0 0 0 1],
            [1 1 1 1 1],
            [0 0 0 1 0],
          ]

resultado para (0, 4) = True
resultado para (1, 1) = False


# complexidade O(1) pois o acesso ao elemento da lista é feito de forma direta pelo index passado como argumento
# ex, para(0, 4), o retorno seria entrada[0][4] == 1