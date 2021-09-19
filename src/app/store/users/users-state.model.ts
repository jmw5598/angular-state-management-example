import { User } from 'src/app/models/user.model';

export interface UsersState {
  users: User[];
}

export const initialUsersState: UsersState = {
  users: [
    {
      firstName: 'Jason',
      lastName: 'White',
      username: 'jmw5598',
    },
  ],
};
