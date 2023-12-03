import { Component } from '@angular/core';
import { AlumnoModel } from 'src/app/models/alumno.model';
import { NgForm } from '@angular/forms';
import { AlumnosService } from '../../services/alumnos.service';

import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  alumno = new AlumnoModel();

  constructor(private alumnoService: AlumnosService,
    private route: ActivatedRoute,
    private router: Router ) { }


    ngOnInit() {

      const id = this.route.snapshot.paramMap.get('id');

      if( id!== 'nuevo' ) {
        this.alumnoService.getAlumno( id )
        .subscribe( (resp: AlumnoModel ) => {
           this.alumno = resp;
           this.alumno.id = id;
        });
      }


    }

    guardar(form: NgForm) {

      if (form.invalid) {
        console.log('Formulario no válido');
        return;
      }

      Swal.fire({
        title: 'Espere',
        text: 'Guardando información',
        icon: 'info',
        allowOutsideClick: false
      });

      Swal.showLoading();

      let peticion: Observable<any>;

      if (this.alumno.id) {
        peticion = this.alumnoService.actualizarHeroe(this.alumno);
        Swal.fire({
            title: this.alumno.nombre,
            text: 'Se actualizó correctamente',
            icon: 'success'
          }).then(() => {
            // Redirigir a la página deseada
            this.router.navigate(['/alumno']);
          });

      } else {
        peticion = this.alumnoService.crearAlumno(this.alumno);
        Swal.fire({
            title: this.alumno.nombre,
            text: 'Se creó correctamente',
            icon: 'success'
          }).then(() => {
            // Redirigir a la página deseada
            this.router.navigate(['/alumno']);
          });
      }

      peticion.subscribe(resp => {});
    }
}
