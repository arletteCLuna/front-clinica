import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrl: './crear-cuenta.component.css'
})
export class CrearCuentaComponent implements OnInit {
  logosinfondo:string="assets/images/logosinfondo.png"

  //DEFINIR VARIABLE
  siteKey:string;
  
  constructor(private loginService:LoginService, private fb:FormBuilder,private router:Router){

    //AGREGAR LA CLAVE DEL SITIO WEB
    this.siteKey='6LemslUpAAAAAEueFQzVEyh5N-ws8Eqp_Ncv1inx';
    
  }
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  myForm:FormGroup = this.fb.group({
    
    nombre:['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]*$/)]],
    apellidop:['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-ZáéíóúüÁÉÍÓÚÜ\s]*$/)]],
    apellidom:['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-ZáéíóúüÁÉÍÓÚÜ\s]*$/)]],
    email:['', [Validators.required,Validators.pattern(this.emailPattern) ]],
    sexo:['', [Validators.required]],
    fecha:['', [Validators.required,this.validateAge.bind(this)]],
    nombreu:['', [Validators.required, Validators.minLength(5)]],
    contrasena:['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/)]],
    contrasena2:['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/)]],
    telefono:['', [Validators.pattern(/^\d{10}$/), Validators.required]]

    /*recaptcha: ['', Validators.required]*/
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
  // FUNCIÓN PARA VALIDACIÓN DE LA FECHA DE NACIMIENTO
  validateAge(control: AbstractControl): ValidationErrors | null {
    const birthdate = new Date(control.value);
    const today = new Date();

    // Validar que la fecha no sea del futuro
    if (birthdate > today) {
        return { 'futureDate': 'La fecha no puede ser del futuro' };
    }

    // Validar que la persona sea mayor de 18 años
    const age = today.getFullYear() - birthdate.getFullYear();
    if (age < 18) {
        return { 'underage': 'La persona debe ser mayor de 18 años' };
    }

    return null;  
}



  getData(){
    if(this.myForm.invalid)
    return
console.log(this.myForm.value);
    this.loginService.crearUsuario(this.myForm.value).subscribe(
      data => {
        console.log(data)
      // Muestra un mensaje de éxito con diseño Bootstrap
      this.showAlert('Cuenta creada correctamente', 'alert-success');
      
      // Redirige al usuario a la página de inicio después de un breve tiempo
      setTimeout(() => {
        this.router.navigate(['/inicio']);
      }, 1000);
    },
    error => {
      // Maneja errores aquí
      console.error(error);
      // Muestra un mensaje de error al usuario con diseño Bootstrap
      this.showAlert('Error al crear la cuenta. Por favor, revise si los datos son correctos.', 'alert-danger');
    }
  );
}

showAlert(message: string, alertClass: string) {
  // Crea un div para el mensaje
  const alertDiv = document.createElement('div');
  alertDiv.className = `alert ${alertClass} fixed-top d-flex align-items-center justify-content-center`;
  alertDiv.textContent = message;
  alertDiv.style.fontSize = '20px'; // Cambia el tamaño del texto

  // Agrega el mensaje al cuerpo del documento
  document.body.appendChild(alertDiv);

  // Elimina el mensaje después de unos segundos
  setTimeout(() => {
    alertDiv.remove();
  }, 5000);
}




  ngOnInit(){
    
  
  }
}
