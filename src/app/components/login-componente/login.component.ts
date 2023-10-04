
import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import {header} from '../header-componente/header.component';

@Component({
    selector:'login-component',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class login{
    constructor(private router: Router) {}

    navigateToCrearUsuario() {
      this.router.navigate(['/crear-usuario']);
    }
}