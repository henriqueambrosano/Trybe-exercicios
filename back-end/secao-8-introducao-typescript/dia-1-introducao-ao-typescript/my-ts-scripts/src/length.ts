enum table {
  km = 1000,
  hm = 100,
  dam = 10,
  m =  1,
  dm =  0.1,
  cm =  0.01,
  mm =  0.001
}

function convert(valor: number, baseUnit: string, convertUnit: string):number {
  const convertedValue = valor * table[baseUnit]
  return convertedValue / table[convertUnit]
}