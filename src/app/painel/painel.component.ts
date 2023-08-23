import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock'
import * as $ from "jquery"

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
//interface OnInit viabiliza a inclusão de um método do ciclo de vida do componente.
//esse componente já foi inserido no app.module
export class PainelComponent implements OnInit, OnDestroy {

  public frases: Frase[] = FRASES

  public option: any = null;

  public resposta: string = ''

  public index: number = 0;

  public arrayAuxiliar: any = [];

  public rodada:number = 0;
  public rodadaFrases = this.frases[this.index];
  //public instrucao: string = this.rodadaFrases.Pergunta;
  //public respostaCerta: string = this.rodadaFrases.RespostaCerta;
  public respostasRandom: any;

  public progresso: number = 0

  public tentativas: number = 3

  public arrayTeste: any = [];

  public indicereal: any = 0;

  public indicetemporario: any = 0;

  public indicedoindice: any = 0;

  public arraytesteteste: any = [];

  public corBotao: any = 'azul';


  //@Output() public encerrarJogo = new EventEmitter() --> Poderia ter sido feito dessa forma
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()
  @Output() public avisoJogo: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.atualizaRodada();
    //this.atualizarPergunta();
  }

  ngOnInit(): void {
    this.indicereal = this.frases.length;
    this.indicetemporario = this.frases.length;
    this.arrayTeste = this.generateRange(this.frases.length);
    this.arrayTeste = this.shuffle(this.arrayTeste);
  }


  ngOnDestroy(): void {
      //console.log('destruiu.')
  }

  public generateRange(n : any){
    let range = [];
    for (let i = 0; i < n; i++) range[i] = i + 1;
    range[n-1] = 0;
    return range;
 }

 public shuffle(array: any) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


  public atualizaResposta(resposta:Event): void{ //mesmo que não aponte o public, por padrão o typescript entende como publico
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta(): void{

    if(this.resposta == '' || this.resposta == null){
      console.log('SELECIONE ALGO');
      alert('marque uma opção.');
      this.avisoJogo.emit('PRESTE ATENÇÃO');
      return;
    }

    if(this.resposta == this.rodadaFrases.RespostaCerta){
      //trocar pergunta da rodada
      this.rodada++;

      this.arraytesteteste = [];
      console.log('limpou array: ' + this.arraytesteteste);

      $("[name='option']").prop('checked', false);

      this.resposta = '';

      //progresso
      this.progresso=this.progresso+(100/this.indicereal)
      this.progresso = Math.round(this.progresso);

      if(this.rodada === this.indicereal){
        //alert('Parabéns, você encerrou o teste com sucesso!')
        this.frases = this.arrayAuxiliar;
        this.encerrarJogo.emit('vitoria')
      }

      //atualiza o objeto do rodadaFrases
      this.atualizaRodada()

    } else {

      this.tentativas = this.tentativas-1
      if(this.tentativas === -1){
        //alert('Você usou todas as tentativas.')
        document.getElementById('botao')?.classList.remove('btn btn-primary');


        this.encerrarJogo.emit('derrota')
      }
    }
  }

  public atualizaRodada():void{
    setTimeout(() => {
      let index = this.arrayTeste[this.indicedoindice];
      this.rodadaFrases=this.frases[index];

      //console.log('teste: ' + this.rodadaFrases.Pergunta);
      this.arraytesteteste.push(this.rodadaFrases.RespostaCerta);
      this.arraytesteteste.push(this.rodadaFrases.RespostaErrada1);
      this.arraytesteteste.push(this.rodadaFrases.RespostaErrada2);
      this.arraytesteteste.push(this.rodadaFrases.RespostaErrada3);
      console.log(this.arraytesteteste);
      this.arraytesteteste = this.shuffle(this.arraytesteteste);
      console.log(this.arraytesteteste);
      console.log(this.arraytesteteste[2]);

      this.resposta = ''
      this.indicedoindice++;
    }, 50);
  }
}

//no html o style foi feito com bootstrap
//entretanto, é possível sobrepor o bootstrap dentro do
//arquivo component.css

