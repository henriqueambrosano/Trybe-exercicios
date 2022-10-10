import { InotasProva, InotasTrabalho } from "./Inotas";

class student {
  matricula: number;
  nome: string;
  notasProva: InotasProva;
  notasTrabalhos: InotasTrabalho;

  constructor(matricula: number, nome: string, notasProva: InotasProva, notasTrab: InotasTrabalho) {
    this.matricula = matricula;
    this.nome = nome;
    this.notasProva = notasProva;
    this.notasTrabalhos = notasTrab;
  }

  getNotasSum() {
    let result = 0;
    Object.keys(this.notasProva).forEach((nota) => result += this.notasProva[nota as keyof InotasProva]);
    Object.keys(this.notasTrabalhos).forEach((nota) => result += this.notasTrabalhos[nota as keyof InotasTrabalho]);
    return result;
  }

  getNotasAverage() {
    const total = this.getNotasSum()
    return total / 6
  }
}

const p1 = new student(1010, 'henrique', {n1: 10, n2:10, n3:10, n4:10}, {n1: 20, n2:20})

console.log(p1.getNotasSum())
console.log(p1.getNotasAverage())