import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './components/navigation/navigation.module';
import { ComputerDashboardModule } from './components/computer-dashboard/computer-dashboard.module'
import { CompanyDashboardModule } from './components/company-dashboard/company-dashboard.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    ComputerDashboardModule,
    CompanyDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
