import { RouterModule } from '@angular/router';
import { GlobalWrapperComponent } from './global-wrapper/global-wrapper.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule } from '../navigation/navigation.module';
import { ComputerDashboardModule } from '../computer-dashboard/computer-dashboard.module';
import { CompanyDashboardModule } from '../company-dashboard/company-dashboard.module';

@NgModule({
  declarations: [GlobalWrapperComponent],
  imports: [
    CommonModule,
    RouterModule,
    NavigationModule,
    ComputerDashboardModule,
    CompanyDashboardModule
  ],
  exports: [
    GlobalWrapperComponent
  ]
})
export class GlobalWrapperModule { }
