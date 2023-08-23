import { Component } from '@angular/core'


@Component({
  //se o selector aparece entre [] ele será utilizado numa div, e não como uma tag por si mesmo
  //caso eu queira fazer do selector uma classe, eu usaria:
  //selector: .app-topo
  selector: 'app-topo', //rótulo utilizado para a instância desse componente dentro dos templates de outros componentes da aplicação.
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'] //posso passar mais de um arquivo .css

  //template: '<p>Esse é o componente topo</p>'

  /*template: `<p>
    Esse é o componente topo
    </p>`*/

    //styles: ['.exemplo {color:red}']

  /*styles: [`
    .exemplo{
      color: red
    }
  `]*/

})
export class TopoComponent{
  public titulo: string = 'Quiz científico' //string interpolation no html através do {{}}

}

//template = view

//templateUrl: apontamento para recurso externo.
//Bom em casos de views mais complexas

//todo componente deve ter um template se não
//apresentará erro

//Assim, na mesma linha, podemos criar a view diretamente aqui, e
//não no .html, com a seguinte linha:
// template: '<p>Esse é o componente topo</p>'
//irá funcionar igual
//se quiser quebrar linha deve-se usar `` e não '' ou "".
//Isso só se aplica caso o visual do site seja MUITO simples

//styles: ['.exemplo {color:red}'] --> inline
//também há possibilidade de quebrar linha utilizando o ``
//styles: [` .exemplo {
//           color:red
//         }`]
