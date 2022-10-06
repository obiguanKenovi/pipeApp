import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit  {


  nombre:string='María';
  genero:string='femenino';
  invitacionMapa={
    'masculino':'invitarlo',
    'femenino':'invitarla'
  };

  //i18nPlural
  clientes:string[]=['María','Pedro','Manuel','Carlos'];
  clienteMapa={
    '=0':'no tenemos ningún cliente esperando.',
    '=1':'tenemos un cliente esperando',
    'other':'tenemos # clienes esperando'
  }


  constructor() { }

  ngOnInit(): void {
  }

  cambiarNombre(){

    if ( this.genero==='femenino')
    {
      this.genero='masculino';
      this.nombre='Jose';
    }    
     else
     {
      this.genero='femenino';
      this.nombre='María';
     }
  }

  borrarCliente(){ 
      //Remueve el ultimo elemento de la clase.
      if(this.clientes.length>0)
      {
        this.clientes.pop();
      }             
  }

   //keyValue pipe.
  persona={
    name:'Jose',
    edad:40,
    direccion:'Martin cortes'
  }

  //json pipe
  heroes=[
    {
    name:'Superman',
    vuela:true
    },
    {
      name:'Batman',
      vuela:false
    },
    {
      name:'Fantasmagorico',
      vuela:true
    },
  ]

  //Async pipe.

  miObservable=interval(1000); //Emitira diferentes valores 0,1,2,3,4,

 valorPromesa=new Promise((resolve,reject)=>{

  setTimeout(()=>{
    resolve( 'Tenemos data de promesa' )
  },3500);
  
 })


}
