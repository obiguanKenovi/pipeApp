import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

//Inicio Cambiar el local de la app
import localeEs from '@angular/common/locales/es-VE';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

registerLocaleData( localeEs );
registerLocaleData( localeFr );
//Fin cambiar el local de la app o la fecha



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule, 
    SharedModule,
    VentasModule 
  ],
  providers: [
    //Con esta importacion se cambia la fecha de forma global
    {
      provide:LOCALE_ID, useValue:'es-VE'
    }
    //fin de cambiar el idioma de la fecha de forma global...
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
