import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyCountComponent } from './company-count/company-count.component';
import { CompanyFiltersComponent } from './company-filters/company-filters.component';
import { CompanyTableComponent } from './company-table/company-table.component';
import { CompanyRowComponent } from './company-row/company-row.component';
import { CompanyAddFormComponent } from './company-add-form/company-add-form.component';
import { CompanyUpdateFormComponent } from './company-update-form/company-update-form.component';
import { CompanyDeleteFormComponent } from './company-delete-form/company-delete-form.component';

@NgModule({
  declarations: [CompanyCountComponent, CompanyFiltersComponent, CompanyTableComponent, CompanyRowComponent, CompanyAddFormComponent, CompanyUpdateFormComponent, CompanyDeleteFormComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CompanyCountComponent, CompanyFiltersComponent, CompanyTableComponent, CompanyRowComponent, CompanyAddFormComponent, CompanyUpdateFormComponent, CompanyDeleteFormComponent
  ]
})
export class CompanyDashboardModule { }
