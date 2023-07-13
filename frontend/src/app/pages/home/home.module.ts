import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgMaterialModule } from 'src/app/modules/ng-material/ng-material.module';
import { CustomComponentsModule } from 'src/app/modules/custom-components/custom-components.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgMaterialModule,
    CustomComponentsModule,
  ],
})
export class HomeModule {}
