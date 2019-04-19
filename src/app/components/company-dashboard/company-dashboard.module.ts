import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyCountComponent } from './company-count/company-count.component';
import { CompanyFiltersComponent } from './company-filters/company-filters.component';
import { CompanyTableComponent } from './company-table/company-table.component';
import { CompanyRowComponent } from './company-row/company-row.component';
import { CompanyAddFormComponent } from './company-add-form/company-add-form.component';
import { CompanyUpdateFormComponent } from './company-update-form/company-update-form.component';
import { CompanyDeleteFormComponent } from './company-delete-form/company-delete-form.component';
import { CompanyDashboardWrapperComponent } from './company-dashboard-wrapper/company-dashboard-wrapper.component';
import { CustomMaterialModule } from 'src/app/custom-material/custom-material.module';

@NgModule({
  declarations: [
    CompanyCountComponent, 
    CompanyFiltersComponent, 
    CompanyTableComponent, 
    CompanyRowComponent, 
    CompanyAddFormComponent, 
    CompanyUpdateFormComponent, 
    CompanyDeleteFormComponent, 
    CompanyDashboardWrapperComponent],
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  exports: [
    CompanyCountComponent, CompanyFiltersComponent, CompanyTableComponent, CompanyRowComponent, CompanyAddFormComponent, CompanyUpdateFormComponent, CompanyDeleteFormComponent, CompanyDashboardWrapperComponent
  ]
})
export class CompanyDashboardModule { }
