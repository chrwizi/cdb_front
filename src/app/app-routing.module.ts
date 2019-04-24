import { CompanyDeleteFormComponent } from './components/company-dashboard/company-delete-form/company-delete-form.component';
import { CompanyUpdateFormComponent } from './components/company-dashboard/company-update-form/company-update-form.component';
import { CompanyAddFormComponent } from './components/company-dashboard/company-add-form/company-add-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ComputerAddFormComponent} from './components/computer-dashboard/computer-add-form/computer-add-form.component';
import {ComputerDeleteFormComponent} from './components/computer-dashboard/computer-delete-form/computer-delete-form.component';
import {UserLoginComponent} from './components/user/user-login/user-login.component';
import {ComputerUpdateFormComponent} from './components/computer-dashboard/computer-update-form/computer-update-form.component';
import { CompanyTableComponent } from './components/company-dashboard/company-table/company-table.component';
import { ComputerDashboardWrapperComponent } from './components/computer-dashboard/computer-dashboard-wrapper/computer-dashboard-wrapper.component';
import { CompanyDashboardWrapperComponent } from './components/company-dashboard/company-dashboard-wrapper/company-dashboard-wrapper.component';
import { GlobalWrapperComponent } from './components/global-wrapper/global-wrapper/global-wrapper.component';
import { UserRegisterComponent } from './components/user/user-register/user-register.component';

const routes: Routes = [

  {
    path: 'computers',
    component: ComputerDashboardWrapperComponent
  },
  {
    path: 'companies',
    component: CompanyDashboardWrapperComponent
  },
  {
    path: 'computers/add',
    component: ComputerAddFormComponent
  },
  {
    path: 'computers/edit/:id',
    component: ComputerUpdateFormComponent
  },
  {
    path: 'computers/delete/:id',
    component: ComputerDeleteFormComponent
  },
  {
    path: 'companies',
    component: CompanyDashboardWrapperComponent
  },
  {
    path: 'companies/add',
    component: CompanyAddFormComponent
  },
  {
    path: 'companies/edit/:id',
    component: CompanyUpdateFormComponent
  },
  {
    path: 'companies/delete/:id',
    component: CompanyDeleteFormComponent
  },
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: 'register',
    component: UserRegisterComponent
  },

  {
    path: '**',
    component: UserLoginComponent,
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
