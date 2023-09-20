import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserDataService {
  private users: User[] = [
    {
      id: '1',
      name: 'John Doe',
      age: 24
    },
    {
      id: '2',
      name: 'Jane Doe',
      age: 16
    },
    {
      id: '3',
      name: 'Richard Maple',
      age: 65
    }
  ];

  public getUsers(): Observable<User[]> {
    return of(this.users);
  }
}
