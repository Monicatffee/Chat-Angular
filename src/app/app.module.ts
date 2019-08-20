import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagenContactoComponent } from './imagen-contacto/imagen-contacto.component';
import { NombreContactoComponent } from './nombre-contacto/nombre-contacto.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BotonComponent } from './boton/boton.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderMenuContactosComponent } from './header-menu-contactos/header-menu-contactos.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagenContactoComponent,
    NombreContactoComponent,
    ContactoComponent,
    BotonComponent,
    HeaderMenuContactosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
