import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { NgMaterialModule } from 'src/app/modules/ng-material/ng-material.module';
import { CustomComponentsModule } from 'src/app/modules/custom-components/custom-components.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    NgMaterialModule,
    CustomComponentsModule,
  ],
})
export class RegisterModule {}
