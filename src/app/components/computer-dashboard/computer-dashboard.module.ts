import { RouterModule } from '@angular/router';
import { CustomMaterialModule } from './../../custom-material/custom-material.module';
import { ComputerDeleteFormComponent } from './computer-delete-form/computer-delete-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputerCountComponent } from './computer-count/computer-count.component';
import { ComputerFiltersComponent } from './computer-filters/computer-filters.component';
import { ComputerTableComponent } from './computer-table/computer-table.component';
import { ComputerAddFormComponent } from './computer-add-form/computer-add-form.component';
import { ComputerUpdateFormComponent } from './computer-update-form/computer-update-form.component';
import { ComputerDashboardWrapperComponent } from './computer-dashboard-wrapper/computer-dashboard-wrapper.component';



@NgModule({
  declarations: [ComputerCountComponent, ComputerFiltersComponent, ComputerTableComponent, ComputerAddFormComponent, ComputerUpdateFormComponent, ComputerDeleteFormComponent, ComputerDashboardWrapperComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    RouterModule
  ],
  exports: [
    ComputerCountComponent, ComputerFiltersComponent, ComputerTableComponent, ComputerAddFormComponent, ComputerUpdateFormComponent, ComputerDeleteFormComponent, ComputerDashboardWrapperComponent
  ]
})
export class ComputerDashboardModule { }
