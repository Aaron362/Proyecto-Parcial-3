
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import { RegistrarComponent } from './components/registrar/registrar.component';
import { CallbackComponent } from './components/callback/callback.component';
import { AlumnoComponent } from './pages/alumno/alumno.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { RegistroComponent } from './pages/registro/registro.component';

import { ProtegidaComponent } from './components/protegida/protegida.component';
import { PreciosComponent } from './components/precios/precios.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

    RegistrarComponent,
    RegistroComponent,
    HomeComponent,
    CallbackComponent,
    AlumnoComponent,
    RegistroComponent,
    HomeComponent,
    ProtegidaComponent,
    PreciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
