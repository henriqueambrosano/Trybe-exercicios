enum convertUnits {
  km = 10 ** 6,
  hm = 10 ** 4,
  dam = 10 ** 2,
  m =  1,
  dm =  10 ** -2,
  cm =  10 ** -4,
  mm =  10 ** -6
}

function convertArea(valor: number, baseUnit: keyof typeof convertUnits, convertUnit:keyof typeof convertUnits):string {
  const convertedValue = valor * convertUnits[baseUnit]
  console.log(`${valor}${baseUnit}² é igua a ${convertedValue / convertUnits[convertUnit]}${convertUnit}²`)
  return `${valor}${baseUnit}² é igua a ${convertedValue / convertUnits[convertUnit]}${convertUnit}²`
}

convertArea(1, 'km', 'm')