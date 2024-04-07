import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {

  //rota para realizar o login
  private URLOGIN = 'http://localhost:3000/login';
  constructor(private http: HttpClient) {}

//método para realizar o login

realizarLogin(email: string, senha: string):Observable<unknown>{

  console.log("logado")
  return this.http.post(this.URLOGIN, {
    //retorno dos dados
    email,
    senha
  });

}

//método enquanto estiver logado no site
// estaLogado(): boolean{

// }
}
