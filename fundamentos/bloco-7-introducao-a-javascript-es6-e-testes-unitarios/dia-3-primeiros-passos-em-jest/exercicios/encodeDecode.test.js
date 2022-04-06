const { it, expect } = require('@jest/globals');

function encode(string) {
  let values = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
    vogals: ['a', 'e', 'i', 'o', 'u'],
  };
  let encodedMessage = '';
  for (let letter of string) {
    if (values.vogals.includes(letter)) {
      encodedMessage += values[letter];
    } else {
      encodedMessage += letter;
    }
  }
  return encodedMessage;
}

function decode(string) {
  let values = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
    numbers: [1, 2, 3, 4, 5],
  };
  let decodedMessage = '';
  for (let letter of string) {
    if (values.numbers.includes(+letter)) {
      decodedMessage += values[+letter];
    } else {
      decodedMessage += letter;
    }
  }
  return decodedMessage;
}

it('testa se as funções encode e decode existem', () => {
  expect(typeof encode).toEqual('function');
  expect(typeof decode).toEqual('function');
});

it('Verifica se encode("aeiou") retorna "12345"', () => {
  expect(encode('aeiou')).toEqual('12345');
});

it('Verifica se decode("12345") retorna "aeiou"', () => {
    expect(decode('12345')).toEqual('aeiou')
})

it('Verifica se apenas vogais sao convertidas em números e vice versa', () => {
    expect(encode('ola mundo')).toEqual('4l1 m5nd4')
    expect(decode('4l1 m5nd4')).toEqual('ola mundo')

})

it('Verifica se o tamanho da string retornada é igual o da string passada como parametro', () =>{
    expect(encode('ola mundo')).toHaveLength('ola mundo'.length)
    expect(decode('4li m5nd4')).toHaveLength('4li m5nd4'.length)
})