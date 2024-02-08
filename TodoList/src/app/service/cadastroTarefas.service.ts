import { HttpClient } from "@angular/common/http"; 
import { Injectable } from "@angular/core";
import { Observable, catchError } from "rxjs";
import { Tarefas } from "../interface/Tarefas";

@Injectable({
    providedIn: 'root'
})

export class CadastroTarefaService{

    private Url: string = 'http://localhost:3000'

    constructor(private http: HttpClient){}

    cadastroTarefas(dadosForm : {nome: string, observacoes: string}): Observable<any>{
        const urlCadastro =`${this.Url}/`;
        console.log('URL da requisição: ->', urlCadastro);

        return this.http.post(this.Url, dadosForm).pipe(
            catchError(error =>{
                console.error('Erro na requisição: ->', error);
                throw error
            })
        )
    }

    getTodasTarefas(): Observable<Tarefas[]>{
        console.log('Puxando as tarefas...')
      return this.http.get<Tarefas[]>(this.Url)  
    }
}