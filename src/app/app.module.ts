import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './components/navigation/navigation.module';
import { ComputerDashboardModule } from './components/computer-dashboard/computer-dashboard.module'
import { CompanyDashboardModule } from './components/company-dashboard/company-dashboard.module';
import { GlobalWrapperComponent } from './components/global-wrapper/global-wrapper/global-wrapper.component';


@NgModule({
  declarations: [
    AppComponent,
    GlobalWrapperComponent
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
