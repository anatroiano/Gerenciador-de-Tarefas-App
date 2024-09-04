import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarefasRoutingModule } from './tarefas-routing.module';
import { TarefasFormComponent } from './tarefas-form/tarefas-form.component';

import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CardModule } from 'primeng/card'; 
import { CalendarModule } from 'primeng/calendar';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { TableModule } from 'primeng/table';

import { FormsModule } from '@angular/forms';
import { TarefasListaComponent } from './tarefas-lista/tarefas-lista.component';
import { DataViewModule } from 'primeng/dataview';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [
    TarefasFormComponent,
    TarefasListaComponent
  ],
  imports: [
    CommonModule,
    TarefasRoutingModule,
    InputTextModule,
    FloatLabelModule,
    CardModule,
    CalendarModule,
    ButtonGroupModule,
    FormsModule,
    TableModule,
    DataViewModule,
    CheckboxModule
    ], 
  exports: [
    TarefasFormComponent
  ]
})
export class TarefasModule { }
