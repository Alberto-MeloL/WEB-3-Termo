import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlHandlingStrategy } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvaliacoesServiceService {

  private URLAVALIACAO = "http://localhost:3000/avaliar";
  constructor(private http: HttpClient) { }

  enviarAvaliacao(avaliacao: number):Observable<number>{

 return this.http.post<number>(this.URLAVALIACAO, {avaliacao});
  }
}
  