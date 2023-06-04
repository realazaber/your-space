import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { IUser } from 'src/app/types/IUser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  users: IUser[] = [];

  constructor(private userService: UsersService) {}

  getUsers(): Observable<IUser[]> {
    return this.userService.getUsers();
  }

  ngOnInit(): void {
    this.getUsers().subscribe({
      next: (users) => {
        this.users = users;
      },
      error: (error) => {
        console.log('Error: ' + error);
      },
    });
  }
}
