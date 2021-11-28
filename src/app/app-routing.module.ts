import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { IngresarComponent } from './pages/ingresar/ingresar.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { PanificacionComponent } from './pages/panificacion/panificacion.component';
import { PasteleriaComponent } from './pages/pasteleria/pasteleria.component';
import { ReposteriaComponent } from './pages/reposteria/reposteria.component';


const routes: Routes = [
  {
    path:'inicio', component:InicioComponent
  },
  {
    path:'', component:InicioComponent
  },
  {
    path:'catalogo', component:CatalogoComponent
  },
  {
    path:'ingresar', component:IngresarComponent
  },
  {
    path:'contacto', component:ContactoComponent
  },
  {
    path:'nosotros', component:NosotrosComponent
  },
  {
    path:'panificacion', component:PanificacionComponent
  },
  {
    path:'reposteria', component:ReposteriaComponent
  },
  {
    path:'pasteleria', component:PasteleriaComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
