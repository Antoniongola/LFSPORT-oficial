export class Intermediacao {
  id: number;
  jogadorTransferido: string;
  equipaAntiga: string;
  equipaNova: string;
  anoIntermediacao: number;

  constructor(id: number, jogadorTransferido: string, equipaAntiga: string, equipaNova: string, anoIntermediacao: number) {
    this.id = id;
    this.jogadorTransferido = jogadorTransferido;
    this.equipaAntiga = equipaAntiga;
    this.equipaNova = equipaNova;
    this.anoIntermediacao = anoIntermediacao;
  }
}
