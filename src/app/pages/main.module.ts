import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  AlertOutline,
  UserOutline,
  LockOutline,
} from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';

const icons: IconDefinition[] = [
  UserOutline,
  MenuUnfoldOutline,
  MenuFoldOutline,
];

@NgModule({
  declarations: [LayoutComponent, DashboardComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    NzLayoutModule,
    NzSliderModule,
    NzMenuModule,
    NzIconModule.forRoot(icons),
    NzBreadCrumbModule,
  ],
  exports: [MainRoutingModule],
})
export class MainModule {}
