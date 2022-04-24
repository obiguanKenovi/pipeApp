import { NgModule } from '@angular/core';


//Begin PrimeNg
import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import {FieldsetModule} from 'primeng/fieldset';
//End PrimeNg



@NgModule({
  exports:[
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule
  ]
})
export class PrimeNgModule { }
