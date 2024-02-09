import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  constructor(private router:Router){ }
  ngOnInit(): void {
    
  }
  navegar(){
    this.router.navigate(['/login'])
  }

  logosinfondo:string="assets/images/logosinfondo.png"
  logoblanco:string="assets/images/logoblanco.png"
  logo:string="assets/images/logo.png";

  servicio1: string="assets/images/servicio1.jpg";
  servicio2: string="assets/images/servicio2.jpg";
  servicio3: string="assets/images/servicio3.jpg";
  servicio4: string="assets/images/servicio4.jpg";
  servicio5: string="assets/images/servicio5.jpg";
  servicio6: string="assets/images/servicio6.jpg";
  brackets: string="assets/images/brackets.jpg";
  implante: string="assets/images/implante.jpg";
  valoracion: string="assets/images/valoracion.jpg";
  extraccion: string="assets/images/extraccion.jpg";
  limpieza: string="assets/images/limpieza.jpg";
}