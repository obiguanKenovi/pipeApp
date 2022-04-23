import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipeApp';
  public _name:string="jose gonzález";
  public _numerico:number=1000;

  public _obj={nombre:"Jose"};






  mostrarNombre(){
    console.log(this._name);
  }
}
