import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIURL } from 'helper';
import { IUser } from '../types/IUser';
import { Observable, map, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private userSource = new BehaviorSubject<IUser | null>(null);
  currentUser$ = this.userSource.asObservable();

  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(APIURL + '/users');
  }

  login(model: any) {
    return this.http.post<IUser>(APIURL + '/account/login', model).pipe(
      map((response: IUser) => {
        const user = response;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.userSource.next(user);
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('user');
    this.userSource.next(null);
  }
}
