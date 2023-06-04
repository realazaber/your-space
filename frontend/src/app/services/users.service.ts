import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIURL } from 'helper';
import { IUser } from '../types/IUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(APIURL + '/users');
  }
}
