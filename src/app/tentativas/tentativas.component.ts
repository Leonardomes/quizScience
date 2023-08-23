import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  @Input() public tentativas!: number

  public coracoes: Array<Coracao> =[
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]

  constructor() { console.log(this.coracoes)}

  ngOnInit(): void {

  }

  ngOnChanges(){
    if(this.tentativas !== this.coracoes.length){
      //this.coracoes[this.tentativas]=new Coracao(false) --> minha tentativa da qual obtive resultado

      let indice = this.coracoes.length - this.tentativas

      this.coracoes[indice - 1].cheio=false
    }
  }

}
function Import() {
  throw new Error('Function not implemented.');
}

  //esse método se chama property binding e não se usa simultaneamente com string interpolation
  // isso quer dizer que a situação a seguir não existe:
  //<img [src]="{{url_img}}"> xxxxxxxxxxxxxx
  //as a seguir sim existem:
  //<img [src]="url_img">
  //<img src="{{url_img}}"">

  //ngOnInit() só é executado uma vez no carregamento do código
