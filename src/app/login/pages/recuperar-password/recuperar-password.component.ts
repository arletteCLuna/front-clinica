import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Email, Password } from '../../interfaces/user.interface';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css']
})
export class RecuperarPasswordComponent {
  constructor(private loginService: LoginService, private fb: FormBuilder, private router: Router) { }
  logoblanco:string="assets/images/logoblanco.png"
  
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  validStatus:boolean = false;
  validForms:boolean = false
  code!:string;
  id!:number;
  sending: boolean = false; // Variable para controlar el estado de envío

  myForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
  })
  codeForm: FormGroup = this.fb.group({
    code: ['', [Validators.required, Validators.min(10)]],
  })
  passwordForm:FormGroup = this.fb.group({
    contrasena:['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/)]],
    contrasena2:['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/)]],
  }, {
    validators: [
      this.isFieldOneEqualFieldTwo('password','password2')
    ]
  })
  public isFieldOneEqualFieldTwo( field1: string, field2: string ) {
    return ( formGroup: AbstractControl ): ValidationErrors | null => {
      const fieldValue1 = formGroup.get(field1)?.value;
      const fieldValue2 = formGroup.get(field2)?.value;
      if ( fieldValue1 !== fieldValue2 ) {
        formGroup.get(field2)?.setErrors({ notEqual: true });
        return { notEqual: true }
      }
      formGroup.get(field2)?.setErrors(null);
      return null;
    }
  }

  sendCode(event: Event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente.
    if (this.myForm.invalid || this.sending) // Verifica si el formulario es inválido o ya se está enviando
      return;

    this.sending = true; // Cambia el estado a true para mostrar el mensaje de espera.

    const email: Email = {
      to: this.myForm.controls['email'].value
    }
    this.loginService.sendCode(email).subscribe(res => {
      if(res.status === 200){
        this.validStatus = true;
        this.code = res.codigo;
        this.id = res.id
      }
      console.log(res)
      this.sending = false; // Cambia el estado de envío nuevamente a falso.
    })
  }

  validCode(){
    if(this.codeForm.invalid)
    return
    if(this.code === this.codeForm.controls['code'].value){
      this.validForms = true;
    }
  }

  updatePassword(){
    if(this.passwordForm.invalid)
      return
    const newPasword:Password = {
      contrasena: this.passwordForm.controls['contrasena'].value
    }
       this.loginService.cambiarPassword(newPasword,this.id).subscribe(data =>{
         console.log(data)
         this.router.navigate(['inicio'])
       })
  }
}
