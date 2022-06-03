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
})

