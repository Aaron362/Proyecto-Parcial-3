import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styleUrls: []
})
export class ProtegidaComponent implements OnInit {

  constructor( public auth: AuthService ) { }

  ngOnInit() {
    console.log('ngOnInit Protegida')
    this.auth.userProfile$.subscribe(perfil => {
      console.log(perfil)
    })

  }

}
