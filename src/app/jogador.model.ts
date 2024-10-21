// jogador.model.ts

export class JogadorModel {
    constructor(
      public cor: string,
      public posicao: string
    ) {}
  }
  
  export class CaminhoJogo {
    constructor(
      public ativo: boolean,
      public bloqueado: boolean,
      public cor: string,
      public largura: string,
      public altura: string,
      public elementos: any[],
      public posX: string,
      public posY: string
    ) {}
  }