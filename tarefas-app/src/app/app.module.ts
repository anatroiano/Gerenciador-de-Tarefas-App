import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TarefasModule } from './tarefas/tarefas.module';

import { FormsModule } from '@angular/forms';
import { TarefasService } from './tarefas.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TarefasModule, 
    FormsModule,
    TabMenuModule,
    TableModule
  ],
  providers: [
    TarefasService,
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
