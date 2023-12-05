import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { AlumnoComponent } from './pages/alumno/alumno.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { TablaAlumnoComponent } from './pages/tabla-alumno/tabla-alumno.component';
const routes: Routes = [
  { path: 'registrar', component: RegistrarComponent},
  {path: 'login', component: LoginComponent},
  { path: 'tabla-alumno', component: TablaAlumnoComponent},

  { path: 'registro/:id', component: RegistroComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'home', component: HomeComponent},
  { path: 'alumno', component: AlumnoComponent},
  { path: '**',pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
