import { Component } from '@angular/core';
import { AlumnoModel } from 'src/app/models/alumno.model';
import { NgForm } from '@angular/forms';
import { AlumnosService } from '../../services/alumnos.service';

import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent {

  alumno: AlumnoModel[] = [];

  constructor ( private alumnosService: AlumnosService) {}

  ngOnInit(){
    this.alumnosService.getAlumnos()
    .subscribe( resp =>{
      console.log(resp);
      this.alumno = resp;
    });

  }

  borrarAlumno( alumnos: AlumnoModel, i:number ){

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
