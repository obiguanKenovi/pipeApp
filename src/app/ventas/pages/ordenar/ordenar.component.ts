import { Component } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {

  public _flag:boolean=false;

  constructor() { }

  cambiarBoolean(){
    
    return this._flag= !this._flag;
   
  }

}
