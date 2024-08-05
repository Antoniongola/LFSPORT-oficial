export class FootballElement {
  id: number;
  nome: string;
  equipa: string;
  descricao: string;
  photoPath: string;

  constructor(id: number, nome: string, equipa: string, descricao: string, photoPath: string) {
    this.id = id;
    this.nome = nome;
    this.equipa = equipa;
    this.descricao = descricao;
    this.photoPath = photoPath;
  }
}
