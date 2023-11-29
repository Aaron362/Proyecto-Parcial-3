import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit{
profile: any;
  constructor( public auth: AuthService){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
