import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { NgMaterialModule } from 'src/app/modules/ng-material/ng-material.module';
import { CustomComponentsModule } from 'src/app/modules/custom-components/custom-components.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    NgMaterialModule,
    CustomComponentsModule,
  ],
})
export class LoginModule {}
