import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtDTO } from '../models/jwt-dto';
import { LoginUsuario } from '../models/login-usuario';
import { NuevoUsuario } from '../models/nuevo-usuario';


//ver cambios para heroku segun modelos de back end con enviroments (archivos en heroku)
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = 'http://localhost:8080/auth/';
  // authUrl = environment.apiAuthUrl;


  constructor( private httpClient: HttpClient) { }

  public nuevo (nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authUrl  + 'nuevo', nuevoUsuario);
  }

  public login (loginUsuario: LoginUsuario): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authUrl  + 'login', loginUsuario);
  }
}
