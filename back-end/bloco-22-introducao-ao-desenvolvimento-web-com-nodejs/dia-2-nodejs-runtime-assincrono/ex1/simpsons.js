const { create } = require('domain');

const fs = require('fs').promises;

async function readAll() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent)
  const strings = simpsons.map(({id, name}) => `${id} - ${name}`);
  strings.forEach((string) => console.log(string) )
}

async function getSimpsonById(id) {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(fileContent)
    const chosenSimpson = simpsons.find((simpson) => +simpson.id === id);
    if (!chosenSimpson) throw new Error('id nao encontrado');
    console.log(`${chosenSimpson.id} - ${chosenSimpson.name}`);
}

async function filterSimpsons() {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(fileContent)
    const newArray = simpsons.filter((simpson) => +simpson.id !== 10 && +simpson.id !== 6);
    await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
}

async function createSimpsonFamily() {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(fileContent)
    const newArray = simpsons.filter((simpson) => +simpson.id >= 1 && simpson.id <= 4);
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(newArray));
}

async function addNelsonToFamily() {
    const simpsonsFile = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(simpsonsFile)
    const nelson = simpsons.find((simpson) => simpson.name === 'Nelson Muntz');
    const simpsonsFamily = await fs.readFile('./simpsonFamily.json', 'utf-8');
    const familyMembers = JSON.parse(simpsonsFamily);
    familyMembers.push(nelson);
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(familyMembers));
}

async function replaceNelson() {
    const simpsonsFamily = await fs.readFile('./simpsonFamily.json', 'utf-8');
    const familyMembers = JSON.parse(simpsonsFamily);
    const newFamilyMembers = familyMembers.filter((simpson) => +simpson.id !== 8);
    newFamilyMembers.push({
        "id": "5",
        "name": "Maggie Simpson"
    })
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(newFamilyMembers));


}

// A função main é apenas para termos um ponto de entrada centralizado para o nosso script
async function main() {
    replaceNelson();
}

main();