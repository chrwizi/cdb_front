import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {buildPath} from 'selenium-webdriver/http';

import {ComputerDashboardModule} from './components/computer-dashboard/computer-dashboard.module';
import {ComputerAddFormComponent} from './components/computer-dashboard/computer-add-form/computer-add-form.component';
import {ComputerDeleteFormComponent} from './components/computer-dashboard/computer-delete-form/computer-delete-form.component';
import {ComputerTableComponent} from './components/computer-dashboard/computer-table/computer-table.component';

const routes: Routes = [

  {
    path: 'computers',
    component: ComputerTableComponent
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
