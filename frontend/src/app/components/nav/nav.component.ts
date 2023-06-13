import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMaterialModule } from 'src/app/modules/ng-material/ng-material.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, NgMaterialModule, RouterModule],
  templateUrl: './nav.component.html',
})
export class NavComponent {}
