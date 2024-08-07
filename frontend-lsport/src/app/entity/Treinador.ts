import {FootballElement} from "./FootballElement";


export class Treinador extends FootballElement {
  constructor(
    id: number,
    nome: string,
    equipa: string,
    descricao: string,
    photoPath: string
  ) {
    super(id, nome, equipa, descricao, photoPath);
  }
}
