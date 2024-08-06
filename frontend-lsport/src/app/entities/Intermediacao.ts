export class Intermediacao {
  id: number;
  jogadorTransferido: string;
  equipaAntiga: string;
  equipaNova: string;
  anoIntermediacao: number;
  photoPath:string;

  constructor(id: number, jogadorTransferido: string, equipaAntiga: string, equipaNova: string, anoIntermediacao: number, photoPath:string) {
    this.id = id;
    this.jogadorTransferido = jogadorTransferido;
    this.equipaAntiga = equipaAntiga;
    this.equipaNova = equipaNova;
    this.anoIntermediacao = anoIntermediacao;
    this.photoPath = photoPath;
  }
}
