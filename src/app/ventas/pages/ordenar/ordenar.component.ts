import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.intrface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {

  public _flag:boolean=false;
  public _horoes:Heroe[]=[
    {
      nombre:'Supermar',
      vuela:true,
      color:Color.azul
    },
    {
      nombre:'Batman',
      vuela:false,
      color:Color.negro
    },
    {
      nombre:'Robin',
      vuela:false,
      color:Color.verde
    },
    {
      nombre:'Daredevil',
      vuela:false,
      color:Color.rojo
    },
    {
      nombre:'Linterna verde',
      vuela:true,
      color:Color.verde
    }
  ];

  constructor() { }

  cambiarBoolean(){

    return this._flag= !this._flag;
   
  }

}
