import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { IngresarComponent } from './pages/ingresar/ingresar.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { PanificacionComponent } from './pages/panificacion/panificacion.component';
import { ReposteriaComponent } from './pages/reposteria/reposteria.component';
import { PasteleriaComponent } from './pages/pasteleria/pasteleria.component';

//firebase
import {AngularFireModule} from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CatalogoComponent,
    IngresarComponent,
    ContactoComponent,
    NosotrosComponent,
    PanificacionComponent,
    ReposteriaComponent,
    PasteleriaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
