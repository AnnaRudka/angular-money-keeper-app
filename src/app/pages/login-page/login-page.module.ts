import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { LoginPageComponent } from './login-page.component';
import { ButtonModule } from '../../shared/components/button/button.module';
import { LogoModule } from '../../shared/components/logo/logo.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, LogoModule],
  exports: [LoginPageComponent],
})
export class LoginPageModule {}
