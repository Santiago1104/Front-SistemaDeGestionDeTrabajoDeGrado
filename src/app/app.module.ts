import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {login} from './components/login-componente/login.component';
import {header} from './components/header-componente/header.component';
import {footer} from './components/footer-componente/footer.component';
import {crearusuario} from './components/crearusuario-componente/crearusuario.component';

@NgModule({
  declarations: [
    AppComponent,
    login,
    header,
    footer,
    crearusuario
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
