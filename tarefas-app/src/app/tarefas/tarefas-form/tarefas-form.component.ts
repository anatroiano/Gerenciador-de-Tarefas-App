import { Component } from '@angular/core';
import { Tarefas } from '../tarefas';
import { TarefasService } from '../../tarefas.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-tarefas-form',
  templateUrl: './tarefas-form.component.html',
  styleUrl: './tarefas-form.component.css'
})
export class TarefasFormComponent {

  tarefa : Tarefas;
  id: number = 0; 
  errors : string[] = [];

  constructor(
    private service : TarefasService,
    private activatedRoute : ActivatedRoute,
    private router : Router
  ) {
    this.tarefa = new Tarefas();
  }

  ngOnInit() {
    let params : Observable<Params> = this.activatedRoute.params;

    params.subscribe( urlParams => {
      this.id = urlParams['id'];
      if(this.id) {
        this.service
        .getTarefaById(this.id)
        .subscribe(
          response => this.tarefa = response,
          errorResponse => this.tarefa = new Tarefas()
        )
      }
    })
  }


  onSubmit() {
    this.service.adicionar(this.tarefa).subscribe(
      response => {
        this.errors = [];
        this.router.navigate(['/listar-tarefas']);
      }, errorResponse => {
          this.errors = [];

          errorResponse.error.errors.forEach((error: { defaultMessage: string; }) => {
            if (error.defaultMessage) {
              this.errors.push(error.defaultMessage);
            }
          })
      })
  }
}
