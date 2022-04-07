const nameEmail = (nome) => ({nomeCompleto: nome, email:`${nome.split(' ').join('_')}@trybe.com`,})

const newEmployees = (myFunc) => {
    const employees = {
      id1: myFunc('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: myFunc('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: myFunc('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

