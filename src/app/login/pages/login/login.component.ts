import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private loginService: LoginService, private fb: FormBuilder, private router: Router) { }
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  myForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    contrasena: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/)]],
  })

  auth() {
    if(this.myForm.invalid)
    {
      this.myForm.markAllAsTouched();
      return;
    }

    this.loginService.validarUsuario(this.myForm.value).subscribe(res=>{
      console.log(res)
      if(res.status === 200)
        this.router.navigate(['/inicio'])
      else
        return console.log(false, "ola")
    })
  }
}
