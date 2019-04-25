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
import { AuthGuard } from './auth/guards/auth.guard';
import { ComputerGuard } from './auth/guards/computer.guard';

const routes: Routes = [

  {
    path: 'computers',
    component: ComputerDashboardWrapperComponent,
    canActivate: [ComputerGuard],
    canLoad: [ComputerGuard]
  },
  {
    path: 'companies',
    component: CompanyDashboardWrapperComponent,
    canActivate: [ComputerGuard],
    canLoad: [ComputerGuard]
  },
  {
    path: 'computers/add',
    component: ComputerAddFormComponent,
    canActivate: [ComputerGuard],
    canLoad: [ComputerGuard]
  },
  {
    path: 'computers/edit/:id',
    component: ComputerUpdateFormComponent,
    canActivate: [ComputerGuard],
    canLoad: [ComputerGuard]
  },
  {
    path: 'computers/delete/:id',
    component: ComputerDeleteFormComponent,
    canActivate: [ComputerGuard],
    canLoad: [ComputerGuard]
  },
  {
    path: 'companies',
    component: CompanyDashboardWrapperComponent,
    canActivate: [ComputerGuard],
    canLoad: [ComputerGuard]
  },
  {
    path: 'companies/add',
    component: CompanyAddFormComponent,
    canActivate: [ComputerGuard],
    canLoad: [ComputerGuard]
  },
  {
    path: 'companies/edit/:id',
    component: CompanyUpdateFormComponent,
    canActivate: [ComputerGuard],
    canLoad: [ComputerGuard]
  },
  {
    path: 'companies/delete/:id',
    component: CompanyDeleteFormComponent,
    canActivate: [ComputerGuard],
    canLoad: [ComputerGuard]
  },
  {
    path: 'login',
    component: UserLoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: UserRegisterComponent,
    canActivate: [AuthGuard]
  },

  {
    path: '**',
    component: UserLoginComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
