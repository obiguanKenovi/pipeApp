import { NgModule } from '@angular/core';


//Begin PrimeNg
import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
//End PrimeNg



@NgModule({
  exports:[
    ButtonModule,
    CardModule
  ]
})
export class PrimeNgModule { }
