import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public jogoEmAndamento: boolean = true
  public tipoEncerramento!: string

  public encerrarJogo(tipo: string):void{
    console.log(tipo);
    this.jogoEmAndamento = false
    this.tipoEncerramento = tipo
  }

  public reiniciarJogo(): void {
    this.jogoEmAndamento = true
    this.tipoEncerramento = ''
  }
}

// selector cria uma tag que permite que a partir do uso dessa tag
//seja possível fazer uma instância desse componente em qualquer
//local da aplicação
//é por isso que esse component é apresentado a partir do index.html
//Lá no index.html podemos ver a tag:
//<app-root></app-root>

// já o templateUrl e styleUrls:
//esses metadados permitem apontar aquivos específicos

//Os estilos atríbuidos no component.css só funcionam nas tags do component.html
//caso eu crie uma tag diretamente no index.html, não sofrerá ação do component.css
