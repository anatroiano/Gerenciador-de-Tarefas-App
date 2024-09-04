import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefasFormComponent } from './tarefas/tarefas-form/tarefas-form.component';
import { TarefasListaComponent } from './tarefas/tarefas-lista/tarefas-lista.component';

const routes: Routes = [
  { path: 'nova-tarefa', component: TarefasFormComponent },
  { path: 'nova-tarefa/:id', component: TarefasFormComponent},
  { path: 'listar-tarefas', component: TarefasListaComponent},
  { path: '', redirectTo: '/listar-tarefas', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
