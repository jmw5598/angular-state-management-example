import { Injectable } from '@angular/core';

import { AbstractStore } from '../../shared/store/abstract-state.store';
import { Todo } from '../models/todo.model';
import { initialTodosState, TodosState } from './todos-state.model';

@Injectable()
export class TodosStore extends AbstractStore<TodosState> {
  constructor() {
    super(initialTodosState)
  }

  public addTodo(todo: Todo): void {
    this.setState({
      ...this._state,
      todos: [...this._state.todos, todo]
    });
  }

  public updateTodo(todo: Todo): void {
    this.setState({
      ...this._state,
      todos: this._state.todos.map(t => t.id === todo.id ? todo : t)
    });
  }

  public removeTodo(todo: Todo): void {
    this.setState({
      ...this._state,
      todos: this._state.todos.filter(t => t.id !== todo.id)
    });
  }

  public resetState(): void {
    this.setState(initialTodosState);
  }
}