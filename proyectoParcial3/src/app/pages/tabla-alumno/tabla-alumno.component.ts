import { Component } from '@angular/core';
import { AlumnoModel } from 'src/app/models/alumno.model';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-tabla-alumno',
  templateUrl: './tabla-alumno.component.html',
  styleUrls: ['./tabla-alumno.component.css']
})
export class TablaAlumnoComponent {
  alumno: AlumnoModel[] = [];

  constructor ( private alumnosService: AlumnosService) {}


  ngOnInit(){
    this.alumnosService.getAlumnos()
    .subscribe( resp =>{
      console.log(resp);
      this.alumno = resp;
    });

  }}
