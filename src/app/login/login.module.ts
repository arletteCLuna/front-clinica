import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { CrearCuentaComponent } from './pages/crear-cuenta/crear-cuenta.component';
import { RecuperarPasswordComponent } from './pages/recuperar-password/recuperar-password.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HeaderComponent } from './interfaces/header/header.component';
import { BreadcrumbsComponent } from './interfaces/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './interfaces/footer/footer.component';
import { ContactoComponent } from './interfaces/contacto/contacto.component';
import { ServiciosComponent } from './interfaces/servicios/servicios.component';
import { UbicacionComponent } from './interfaces/ubicacion/ubicacion.component';

//CAPTCHA//
import { NgxCaptchaModule } from 'ngx-captcha';

@NgModule({
  declarations: [
    LoginComponent,
    CrearCuentaComponent,
    RecuperarPasswordComponent,
    LayoutComponent,
    InicioComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    ContactoComponent,
    ServiciosComponent,
    UbicacionComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    NgxCaptchaModule
  ]
})
export class LoginModule { }
