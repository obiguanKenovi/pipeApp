import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';



@NgModule({
  declarations: [
    NumerosComponent,
    NoComunesComponent,
    OrdenarComponent,
    BasicosComponent,
    MayusculasPipe,
    VuelaPipe,
    OrdenarPipe
  ],
  imports: [
    CommonModule, 
    PrimeNgModule,
  ],
  exports:[
    NumerosComponent,
    NoComunesComponent,
    OrdenarComponent,
    BasicosComponent,
  ]
})
export class VentasModule { }
