import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

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

  constructor(
    private primengConfig: PrimeNGConfig
  ){

  }
 
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.primengConfig.ripple = true;
    
  }





  mostrarNombre(){
   
  }
}
