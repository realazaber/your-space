import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type Direction = 'col' | 'row';
type bgCol = 'pri' | 'sec' | 'none';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './container.component.html',
})
export class ContainerComponent {
  @Input() direction: Direction = 'col';
  @Input() bgColour: bgCol = 'none';
  @Input() minHeight: string = '50vh';
}
