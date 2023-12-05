import { Component } from '@angular/core';
import { Alumno2Model } from 'src/app/models/alumno2.model';
import { Alumnos2Service } from 'src/app/services/alumnos2.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-alumno2',
  templateUrl: './alumno2.component.html',
  styleUrls: ['./alumno2.component.css']
})
export class AlumnoComponent {

  alumno: Alumno2Model[] = [];

  constructor ( private alumnos2Service: Alumnos2Service) {}

  ngOnInit(){
    this.alumnos2Service.getAlumnos()
    .subscribe( resp =>{
      console.log(resp);
      this.alumno = resp;
    });

  }

  borrarAlumno( alumnos: Alumno2Model, i:number ){

    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro que desea borrar a ${alumnos.nombre}`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {

      if( resp.value ){
        this.alumno.splice(i, 1);
        this.alumnosService.borrarAlumno( alumnos.id ).subscribe();
      }

    });


  }

}
