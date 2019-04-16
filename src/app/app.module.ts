import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavigationModule } from './components/navigation/navigation.module';
import { ComputerDashboardModule } from './components/computer-dashboard/computer-dashboard.module'
import { CompanyDashboardModule } from './components/company-dashboard/company-dashboard.module';
import { GlobalWrapperComponent } from './components/global-wrapper/global-wrapper/global-wrapper.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';



@NgModule({
  declarations: [
    AppComponent,
    GlobalWrapperComponent,
    UserLoginComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NavigationModule,
    ComputerDashboardModule,
    CompanyDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
