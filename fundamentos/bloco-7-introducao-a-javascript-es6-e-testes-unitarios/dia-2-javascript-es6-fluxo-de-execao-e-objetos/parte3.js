const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const modifyObject = (obj, key, value) => {
  obj[key] = value;
};

const listObjKeys = (obj) => {
  console.log(Object.keys(obj));
};

const objSize = (obj) => {
  console.log(Object.keys(obj).length);
};

const objValues = (obj) => {
  console.log(Object.values(obj));
};

const allLessons = {
  lesson1: Object.assign({}, lesson1),
  lesson2: Object.assign({}, lesson2),
  lesson3: Object.assign({}, lesson3),
};
console.log(allLessons);
