import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CredencialesService } from 'src/app/models/credenciales.model';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  credencialesCorrectas: boolean;
  constructor(private credencialesService: CredencialesService,
    private router: Router) {}

  ngOnInit() {
    this.credencialesCorrectas = this.credencialesService.getCredencialesCorrectas();
    console.log('Credenciales correctas:', this.credencialesCorrectas);
  }

  cerrarSesion() {
    this.credencialesCorrectas = false;
    console.log('Cerrando sesión...');
    console.log('cerrando sesion:', this.credencialesService);
    window.location.href = '/inicio';
  }


  }
