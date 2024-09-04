import { Injectable } from '@angular/core';
import { Tarefas } from './tarefas/tarefas';

import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  url : string = environment.apiUrl;

  constructor(
    private http : HttpClient
  ) { }

  adicionar(tarefa : Tarefas) : Observable<Tarefas>{
    return this.http.post<Tarefas>(this.url, tarefa);
  }

  getAllTarefas() {
    return this.http.get<Tarefas[]>(this.url);
  }

  getTarefaById(id: number) : Observable<Tarefas> {
    return this.http.get<any>(`${this.url}/${id}`);
  }

  deletarTarefa(tarefa : Tarefas) : Observable<any> {
    return this.http.delete<Tarefas[]>(`${this.url}/${tarefa.id}`);
  }

  concluirTarefa(tarefa : Tarefas) {
    return this.http.patch<Tarefas[]>(`${this.url}/${tarefa.id}/concluida`, null);
  }
}
