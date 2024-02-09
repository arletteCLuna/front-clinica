import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './login/pages/inicio/inicio.component';
import { CrearCuentaComponent } from './login/pages/crear-cuenta/crear-cuenta.component';
import { LoginComponent } from './login/pages/login/login.component';
import { ContactoComponent } from './login/interfaces/contacto/contacto.component';
import { ServiciosComponent } from './login/interfaces/servicios/servicios.component';
import { QuienessomosComponent } from './login/interfaces/quienessomos/quienessomos.component';
import { RecuperarPasswordComponent } from './login/pages/recuperar-password/recuperar-password.component';

const routes: Routes = [
  //RUTAS DE NAVEGACIÓN
  { path: 'Inicio', component: InicioComponent},
  { path:'Registro', component: CrearCuentaComponent },
  { path:'Login', component: LoginComponent },
  { path: 'Recuperar', component: RecuperarPasswordComponent},
  { path: 'Contacto', component: ContactoComponent },
  { path: 'Servicios', component: ServiciosComponent},
  { path: 'QuienesSomos', component: QuienessomosComponent},
  
  {
    path: 'user',
    loadChildren: () => import('./login/login.module').then(m=>m.LoginModule)
  },
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'user'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
