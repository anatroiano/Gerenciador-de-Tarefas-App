import { Component } from '@angular/core';
import { TarefasService } from '../../tarefas.service';
import { Tarefas } from '../tarefas';

@Component({
  selector: 'app-tarefas-lista',
  templateUrl: './tarefas-lista.component.html',
  styleUrl: './tarefas-lista.component.css'
})
export class TarefasListaComponent {

  tarefas : Tarefas[] = [];

  constructor(private service : TarefasService) {

  }

  ngOnInit() {
    this.service.getAllTarefas().subscribe(
      response => {
        this.tarefas = response;
      }
    )
  }

  deletarTarefa(tarefa : Tarefas) {
    this.service.deletarTarefa(tarefa).subscribe(
      response => this.ngOnInit()
    )
  }

  concluir(tarefa : Tarefas) {
    this.service.concluirTarefa(tarefa).subscribe(
      response => this.ngOnInit()
    )
  }

}
