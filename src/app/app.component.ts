import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from './models/user.model';
import { UsersState } from './store/users/users-state.model';
import { UsersStore } from './store/users/users.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public usersState$: Observable<UsersState>;
  public form: FormGroup;

  constructor(private _usersStore: UsersStore, private _formBuilder: FormBuilder) {
    this.usersState$ = this._usersStore.onStateChanges();
    this.form = this._formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      username: ['', [Validators.required]]
    });
  }

  public addUser(user: User) {
    this._usersStore.addUser(user);
    this.form.reset();
  }
}
