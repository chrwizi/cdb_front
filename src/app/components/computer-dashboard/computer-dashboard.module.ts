import { ComputerDeleteFormComponent } from './computer-delete-form/computer-delete-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputerCountComponent } from './computer-count/computer-count.component';
import { ComputerFiltersComponent } from './computer-filters/computer-filters.component';
import { ComputerTableComponent } from './computer-table/computer-table.component';
import { ComputerRowComponent } from './computer-row/computer-row.component';
import { ComputerAddFormComponent } from './computer-add-form/computer-add-form.component';
import { ComputerUpdateFormComponent } from './computer-update-form/computer-update-form.component';
import { ComputerDashboardWrapperComponent } from './computer-dashboard-wrapper/computer-dashboard-wrapper.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatSelectModule } from '@angular/material';


@NgModule({
  declarations: [
    ComputerCountComponent, 
    ComputerFiltersComponent, 
    ComputerTableComponent, 
    ComputerRowComponent, 
    ComputerAddFormComponent, 
    ComputerUpdateFormComponent, 
    ComputerDeleteFormComponent, 
    ComputerDashboardWrapperComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ComputerCountComponent, 
    ComputerFiltersComponent, 
    ComputerTableComponent, 
    ComputerRowComponent, 
    ComputerAddFormComponent, 
    ComputerUpdateFormComponent, 
    ComputerDeleteFormComponent, 
    ComputerDashboardWrapperComponent
  ]
})
export class ComputerDashboardModule { }
