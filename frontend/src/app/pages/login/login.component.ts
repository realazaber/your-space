import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  model: any = {};
  loginError: string | null = null;

  constructor(private usersService: UsersService) {}

  login() {
    this.usersService.login(this.model).subscribe({
      next: (response) => {
        console.log(response);
        this.loginError = null;
      },
      error: (error) => {
        this.loginError = error.error;
      },
    });
  }
}
