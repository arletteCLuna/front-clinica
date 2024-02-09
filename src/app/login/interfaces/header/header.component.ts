import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {}

  menuVariable:boolean=false;
  menu_icon_variable:boolean=false;

  openMenu(){
    this.menuVariable =! this.menuVariable;
    this.menu_icon_variable =! this.menu_icon_variable;
  }


////////////////////////////////
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  navigateToSection(sectionId: string): void {
    this.router.navigate([], {
      fragment: sectionId,
      relativeTo: this.route,
      queryParamsHandling: 'merge'
    });
    this.scrollToSection(sectionId);
  }
  
  ngOnInit(){
    
  }
    navegar(){
      this.router.navigate(['./login'])

    }

    logoblanco:string="assets/images/logoblanco.png"

  }


  