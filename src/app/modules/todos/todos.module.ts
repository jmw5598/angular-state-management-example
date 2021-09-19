import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosStore } from './store/todos.store';
import { TodosComponent } from './pages/todos/todos.component';

@NgModule({
  declarations: [
    TodosComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule
  ],
  providers: [
    TodosStore
  ]
})
export class TodosModule { }
