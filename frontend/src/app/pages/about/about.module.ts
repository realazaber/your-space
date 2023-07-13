import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { CustomComponentsModule } from 'src/app/modules/custom-components/custom-components.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, AboutRoutingModule, CustomComponentsModule],
})
export class AboutModule {}
