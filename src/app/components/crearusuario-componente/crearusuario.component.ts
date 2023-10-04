import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector:'crearusuario-component',
    templateUrl: 'crearusuario.component.html',
    styleUrls: ['crearusuario.component.css']
})
export class crearusuario{
    constructor(private router: Router) {}
    
    infoVisible = false;
    nombre = 'Pepe Pérez';
    correo = 'pepe@unicauca.edu.co';
    codigo = '1046123823';
    rol = 'Jefe Departamento';
  
    toggleInfo() {
      this.infoVisible = !this.infoVisible;
    }
  }
  
  
  
  
  
  

