import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroServiceService {

  private URL = 'http://localhost:3000/cadastro'

  constructor(private http: HttpClient) { }

  

}
