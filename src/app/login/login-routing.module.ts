import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCuentaComponent } from './pages/crear-cuenta/crear-cuenta.component';
import { RecuperarPasswordComponent } from './pages/recuperar-password/recuperar-password.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HeaderComponent } from './interfaces/header/header.component';
import { FooterComponent } from './interfaces/footer/footer.component';
import { ContactoComponent } from './interfaces/contacto/contacto.component';
import { ServiciosComponent } from './interfaces/servicios/servicios.component';
import { UbicacionComponent } from './interfaces/ubicacion/ubicacion.component';
import { QuienessomosComponent } from './interfaces/quienessomos/quienessomos.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'inicio',
        component: InicioComponent
      },
      {
        path: 'header',
        component: HeaderComponent
      },
      {
        path: 'footer',
        component: FooterComponent
      },
      {
        path: 'contacto',
        component: ContactoComponent
      },
      {
        path: 'servicios',
        component: ServiciosComponent
      },
      {
        path: 'ubicacion',
        component: UbicacionComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'crear-cuenta',
        component: CrearCuentaComponent
      },
      {
        path: 'recuperar-password',
        component: RecuperarPasswordComponent
      },
      {
        path: 'quienessomos',
        component: QuienessomosComponent
      },
      {
        path: '**',
        redirectTo: 'inicio'

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
