import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroServiceService {

  private URLCADASTRO = 'http://localhost:3000/cadastro'

  constructor(private http: HttpClient) { }

  cadastrarCliente(dadosCliente: any): Observable<unknown>{
    return this.http.post(this.URLCADASTRO, dadosCliente);
    
  }


}
