import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email, Password, Response, User } from '../interfaces/user.interface';
import { RespuestaLogin } from '../interfaces/respuestalogin.interface';
import { DatosEnviados } from '../interfaces/datosenviados.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  getUserByEmail(emai:string){
    return this.http.get<User>('http://localhost:3000/auth/'+emai)
  }
  crearUsuario(userNew:User){
    return this.http.post<User>('http://localhost:3000/auth', userNew)
  }
  cambiarPassword(newPassword:Password,id:number){
    return this.http.patch<User>('http://localhost:3000/auth/'+id, newPassword)
  }
  sendCode(email:Email){
    return this.http.post<Response>('http://localhost:3000/email',email)
  }


  validarUsuario(datos:DatosEnviados){
    return this.http.post<RespuestaLogin>('http://localhost:3000/login/',datos)
  }

}
