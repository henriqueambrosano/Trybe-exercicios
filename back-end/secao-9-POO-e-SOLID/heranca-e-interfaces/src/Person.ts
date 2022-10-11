import { InotasProva, InotasTrabalho } from "../interfaces/Inotas";

class Person {
  constructor(private _name: string, private _birthDate: Date) {
    this.validateDate(_birthDate);
    this.validateName(_name);
    this.name = _name;
    this.birthDate = _birthDate;
  }

  private validateName(name: string) {
    if( name.length < 3 ) throw new Error('O nome deve conter ao menos 3 letras.');
  }

  private validateDate(date: Date) {
    if( new Date(date) > new Date()) throw new Error('A data de nascimento nao pode ser uma data no futuro.') 
    if ( (new Date().getTime() - new Date(date).getTime()) / 31536000000 > 120) throw new Error('A pessoa nao pode ter mais de 120 anos.') 
  }

  get name() {
    return this._name
  }

  set name(name: string) {
    this.validateName(name);
    this._name = name;
  }

  get birthDate() {
    return this._birthDate;
  }
  set birthDate(date: Date) {
    this.validateDate(date);
    this._birthDate = date;
  }

  getAge(): number {
    return Math.floor((new Date().getTime() - this._birthDate.getTime() )/ 31536000000)
  }
}

const p1 = new Person('henrique', new Date('1996/07/14'))
const p2 = new Person('ambrosano', new Date('1957/07/08'))


p1.name = 'alf'

console.log(p1.getAge())
console.log(p2.name)

class Student extends Person {
  private _enrollment = String();
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate)
    this._enrollment = this.generateEnrollment();
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }

  private validateEnrollment(enrollment: string) {
    if (enrollment.length < 16) throw new Error('A matricula deve ter no minimo 16 caracteres')
  }

  private validateExamsGrades(examsGrades: number[]) {
    if (examsGrades.length > 4) throw new Error('A pessoa estudante nao pode possuir mais de 4 notas de prova')
  }

  private validateWorksGrades(worksGrades: number[]) {
    if (worksGrades.length > 2) throw new Error('A pessoa estudante nao pode possuir mais de 2 notas de trabalho')
  }


  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    this.validateExamsGrades(value);
    this._examsGrades = value;
  }

  get worksGrades(): number[] {
    return this._worksGrades;
  }

  set worksGrades(value: number[]) {
    this.validateWorksGrades(value);
    this._worksGrades = value;
  }

  getSumGrades() {
    let result = 0;
    Object.keys(this._examsGrades).forEach((nota) => result += this._examsGrades[+nota as number]);
    Object.keys(this._worksGrades).forEach((nota) => result += this._worksGrades[+nota as number]);
    return result;
  }

  getAverageGrade() {
    const total = this.getSumGrades()
    return total / 6
  }
}

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
const jessica = new Student('Jéssica Bianca Nunes', new Date('2004/06/06'));
const tamires = new Student('Tamires Santos Bastos', new Date('2005/11/05'));
const fernando = new Student('Fernando Gonçalves', new Date('2006/09/11'));

carolina.examsGrades = [25, 20, 25, 23];
lucas.examsGrades = [25, 20, 25, 23];
jessica.worksGrades = [50, 45];
tamires.worksGrades = [47, 42];

console.log(carolina);
console.log(lucas);
console.log(jessica);
console.log(tamires);
console.log(fernando);