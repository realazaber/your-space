import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'src/app/components/universal/button/button.component';
import { ContainerComponent } from 'src/app/components/universal/container/container.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ButtonComponent, ContainerComponent],
  exports: [ButtonComponent, ContainerComponent],
})
export class CustomComponentsModule {}
