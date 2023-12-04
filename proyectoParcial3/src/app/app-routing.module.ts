import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { AlumnoComponent } from './pages/alumno/alumno.component';
import { RegistroComponent } from './pages/registro/registro.component';

import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { CallbackComponent } from './components/callback/callback.component';
import { AuthGuardService } from './services/auth.guard';

const routes: Routes = [
  { path: 'registrar', component: RegistrarComponent},
  { path: 'registro/:id', component: RegistroComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'home', component: HomeComponent},
  { path: 'alumno', component: AlumnoComponent},
    { path: 'precios', component: PreciosComponent },
   {
    path: 'protegida',
    component: ProtegidaComponent,
    canActivate: [ AuthGuardService ]
   },
  { path: 'Callback', component: CallbackComponent },
  { path: '**',pathMatch: 'full', redirectTo: 'home' }







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
