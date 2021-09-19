import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { AbstractStore } from '../abstract-state.store';
import { initialUsersState, UsersState } from './users-state.model';

@Injectable({
  providedIn: 'root',
})
export class UsersStore extends AbstractStore<UsersState> {
  constructor() {
    super(initialUsersState);
  }

  public getUsers(): void {}

  public addUser(user: User): void {
    this.setState({
      ...this._state,
      users: [...this._state.users, user],
    });
  }

  public resetState(): void {
    this.setState(initialUsersState);
  }
}
