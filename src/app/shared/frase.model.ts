//shared - recursos compartilhados

export class Frase {
  /*
  public fraseEng: string
  public frasePTBR: string
  constructor(fraseEng:string, frasePTBR:string){
    this.fraseEng = fraseEng
    this.frasePTBR = frasePTBR
  } */

  //para economizar linhas podemos declarar os atributos direto no construtor

  constructor(public Pergunta: string,
              public RespostaCerta: string,
              public RespostaErrada1: string,
              public RespostaErrada2:string,
              public RespostaErrada3: string){}
}
