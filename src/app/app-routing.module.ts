import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {login} from './components/login-componente/login.component';
import {header} from './components/header-componente/header.component';
import {footer} from './components/footer-componente/footer.component';
import {crearusuario} from './components/crearusuario-componente/crearusuario.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Ruta por defecto que redirige a 'login'
  { path: 'login', component: login }, // Ruta del componente de inicio de sesión
  { path: 'crear-usuario', component: crearusuario }, // Otras rutas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
