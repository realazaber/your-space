import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('briefAboutSection') briefAboutSection!: ElementRef;

  scrollToSection(sectionId: string): void {
    if (sectionId === 'brief-about') {
      this.briefAboutSection.nativeElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }
}
