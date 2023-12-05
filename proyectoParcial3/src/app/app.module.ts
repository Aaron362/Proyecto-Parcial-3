import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { CallbackComponent } from './components/callback/callback.component';
import { AlumnoComponent } from './pages/alumno/alumno.component';
import { environment } from 'src/environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { RegistroComponent } from './pages/registro/registro.component';
import { CredencialesService } from './models/credenciales.model';
import { AngularFireModule } from '@angular/fire/compat';
import { TablaAlumnoComponent } from './pages/tabla-alumno/tabla-alumno.component';
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
    TablaAlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),

  ],
  providers: [CredencialesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
