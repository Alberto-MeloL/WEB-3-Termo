import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDadosService {

  constructor(private http: HttpClient) { }

  getDados(): undefined{

  }
}
