import { NgModule } from '@angular/core';


//Begin PrimeNg
import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
//End PrimeNg



@NgModule({
  exports:[
    ButtonModule,
    CardModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
