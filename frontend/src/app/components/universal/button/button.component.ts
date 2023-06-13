import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

type ButtonType = 'primary' | 'accent' | 'warn' | 'plain';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() btnType: ButtonType = 'primary';
  @Input() btnText: string = 'Button';
}
