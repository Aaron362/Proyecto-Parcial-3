import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CredencialesService } from 'src/app/models/credenciales.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 constructor(private credencialesService: CredencialesService, private router: Router) {}

  emailAdmin:string = "zuriel.zuriel@gmail.com";
  passwordAdmin:string = "123456";



  verificarCredenciales(email: string, password: string) {
    if (email === this.emailAdmin && password === this.passwordAdmin) {
      console.log("Credenciales correctas");
      this.credencialesService.setCredencialesCorrectas(true);
      this.router.navigate(['/tabla']);
    } else {
      console.log("Credenciales incorrectas");
      this.credencialesService.setCredencialesCorrectas(false);
    }
  }


}