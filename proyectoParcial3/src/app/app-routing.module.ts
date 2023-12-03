import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { AlumnoComponent } from './pages/alumno/alumno.component';

const routes: Routes = [
  { path: 'registrar', component: RegistrarComponent},
  { path: 'home', component: HomeComponent},
  { path: 'alumno/:id', component: AlumnoComponent},
  { path: 'alumno', component: AlumnoComponent},
  { path: '**',pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
