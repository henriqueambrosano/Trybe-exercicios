const service = require('./service')

describe('testando a função que gera número aleatório', () => {
  it('verifica se a função é chamada', () => {
    service.randomNumber = jest.fn().mockReturnValue(10)
    service.randomNumber()
    expect(service.randomNumber).toHaveBeenCalled()
    expect(service.randomNumber()).toBe(10)
    expect(service.randomNumber).toHaveBeenCalledTimes(2)
  })

  it('Testa o retorno da divisao de 2 parametros, mockando o resultado uma única vez', () => {
    service.randomNumber = jest.fn().mockImplementationOnce((a,b) => a/b);
    expect(service.randomNumber(10,5)).toBe(2);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber()).toBe(undefined);
  })

  it('Testa novas implementações na função', () => {
    service.randomNumber = jest.fn().mockImplementationOnce((a,b,c) => a*b*c);
    expect(service.randomNumber(10,10,10)).toBe(1000);
    expect(service.randomNumber).toHaveBeenCalled();

    service.randomNumber.mockReset()

    expect(service.randomNumber).toHaveBeenCalledTimes(0)

    service.randomNumber = jest.fn().mockImplementationOnce((a) => a*2);
    expect(service.randomNumber(10)).toBe(20);
    expect(service.randomNumber).toHaveBeenCalled()
  })

  it('testa as novas funções criadas', () => {
    const toUpper = jest.spyOn(service, 'toUpper').mockImplementation((string) => string.toLowerCase())
    expect(service.toUpper('TESTE')).toBe('teste')

    const firstLetter = jest.spyOn(service, 'firstLetter').mockImplementation((string) => string[string.length-1])
    expect(service.firstLetter('hello')).toBe('o')

    const joinStrings = jest.spyOn(service, 'joinStrings').mockImplementation((s1,s2,s3) => s1+s2+s3)
    expect(service.joinStrings('a','b','c')).toBe('abc')

    service.toUpper.mockRestore();

    expect(service.toUpper('hello')).toBe('HELLO')
  })

  it('testa mock de api', async () => {
    service.requestDog = jest.fn()
    service.requestDog.mockResolvedValue('request success')

    expect(service.requestDog()).resolves.toBe('request success')

    service.requestDog.mockReset();

    service.requestDog.mockRejectedValue('request failed')

    expect(service.requestDog()).rejects.toBe('request failed')


  })

})

