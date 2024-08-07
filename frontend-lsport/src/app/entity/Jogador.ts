import {FootballElement} from "./FootballElement";

export class Jogador extends FootballElement {
  posicao: string;
  equipaNacional: string;
  pePreferido: string;
  dataNascimento: string;
  altura: number;
  nacionalidade: string;
  trofeus: string;

  constructor(
    id: number,
    nome: string,
    equipa: string,
    descricao: string,
    photoPath: string,
    posicao: string,
    equipaNacional: string,
    pePreferido: string,
    dataNascimento: string,
    altura: number,
    nacionalidade: string,
    trofeus: string
  ) {
    super(id, nome, equipa, descricao, photoPath);
    this.posicao = posicao;
    this.equipaNacional = equipaNacional;
    this.pePreferido = pePreferido;
    this.dataNascimento = dataNascimento;
    this.altura = altura;
    this.nacionalidade = nacionalidade;
    this.trofeus = trofeus;
  }
}
