import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { LoginComponent } from './login.component';
import {
  AccountBookFill,
  AlertFill,
  AlertOutline,
  UserOutline,
  LockOutline,
} from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [UserOutline, LockOutline, AlertFill];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    NzIconModule.forRoot(icons),
    FormsModule,
    NzTypographyModule,
    ReactiveFormsModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
  ],
})
export class LoginModule {}
