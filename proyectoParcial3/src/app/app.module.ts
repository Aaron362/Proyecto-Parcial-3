import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { CallbackComponent } from './components/callback/callback.component';
import { AlumnoComponent } from './pages/alumno/alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistrarComponent,
    HomeComponent,
    CallbackComponent,
    AlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
