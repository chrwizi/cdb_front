import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ComputerAddFormComponent} from './components/computer-dashboard/computer-add-form/computer-add-form.component';
import {ComputerDeleteFormComponent} from './components/computer-dashboard/computer-delete-form/computer-delete-form.component';
import {ComputerTableComponent} from './components/computer-dashboard/computer-table/computer-table.component';
import {UserLoginComponent} from './components/user/user-login/user-login.component';
import {ComputerUpdateFormComponent} from './components/computer-dashboard/computer-update-form/computer-update-form.component';
import { CompanyTableComponent } from './components/company-dashboard/company-table/company-table.component';
import {ComputerDashboardModule} from './components/computer-dashboard/computer-dashboard.module';



const routes: Routes = [

  {
    path: 'computers',
    component: ComputerTableComponent
  },

  {
    path: 'companies',
    component: CompanyTableComponent
  },

  {
    path: 'computers/add',
    component: ComputerAddFormComponent
  },

  {
    path: 'computers/delete/:id',
    component: ComputerDeleteFormComponent
  },

  {
    path: 'computers/edit/:id',
    component: ComputerUpdateFormComponent
  },

  {
    path: 'login',
    component: UserLoginComponent
  },

  {
    path: '**',
    redirectTo: 'computers',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
