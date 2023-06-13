import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, AppRoutingModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  currentYear: number;

  constructor() {
    this.currentYear = new Date().getFullYear();
  }
}
