const fs = require('fs').promises;
const { join } = require('path');

const readCacaoTrybeFile = async () => {
  const path = '/files/cacaoTrybeFile.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const writeCacaoTrybeFile = async (cacaoTrybe) => {
  const path = 'src/files/cacaoTrybeFile.json';
  await fs.writeFile(path, JSON.stringify(cacaoTrybe), 'utf-8' );
}

const getAllChocolates = async () => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates;
};
const getChocolateById = async (id) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates
    .filter((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates
    .filter((chocolate) => chocolate.brandId === brandId);
};

const getTotalChocolates = async () => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates.length
};

const getChocolatesByName = async (term) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates.filter((choc) => choc.name.toLowerCase().includes(term.toLowerCase()));  
};

const updateChocolateById = async (id, newData) => {
  let cacaoTrybe = await readCacaoTrybeFile();
  const updatedChocolate = cacaoTrybe.chocolates.find((choc) => choc.id === +id);

  if (updatedChocolate) {
    cacaoTrybe.chocolates = cacaoTrybe.chocolates.map((choc) => {
      if(choc.id === +id) return {...choc, ...newData };
      return choc
    });
    await writeCacaoTrybeFile(cacaoTrybe);
    return { ...updatedChocolate, ...newData };
  }
  return false
}

module.exports = {
    getAllChocolates,
    getChocolateById,
    getChocolatesByBrand,
    getTotalChocolates,
    getChocolatesByName,
    updateChocolateById,
};