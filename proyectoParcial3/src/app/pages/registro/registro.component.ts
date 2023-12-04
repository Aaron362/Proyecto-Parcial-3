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

      function calcularPromedio() {
        const c1 = parseFloat((document.getElementById('c1') as HTMLInputElement).value);
        const c2 = parseFloat((document.getElementById('c2') as HTMLInputElement).value);
        const c3 = parseFloat((document.getElementById('c3') as HTMLInputElement).value);

        // Calcular el promedio
        const promedio = (c1 + c2 + c3) / 3;

        (document.getElementById('promedio') as HTMLInputElement).value = promedio.toFixed(2);
      }

        const calcularButton = document.getElementById('calPromedio');
        if (calcularButton) {
          calcularButton.addEventListener('click', calcularPromedio);
        }



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
        peticion = this.alumnoService.actualizarAlumno(this.alumno);
        Swal.fire({
            title: this.alumno.nombre,
            text: 'Se actualizó correctamente',
            icon: 'success'
          }).then(() => {
            // Redireccion
            this.router.navigate(['/alumno']);
          });

      } else {
        peticion = this.alumnoService.crearAlumno(this.alumno);
        Swal.fire({
            title: this.alumno.nombre,
            text: 'Se creó correctamente',
            icon: 'success'
          }).then(() => {

            this.router.navigate(['/alumno']);
          });
      }

      peticion.subscribe(resp => {});
    }
}
