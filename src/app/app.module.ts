import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavigationModule } from './components/navigation/navigation.module';
import { ComputerDashboardModule } from './components/computer-dashboard/computer-dashboard.module';
import { CompanyDashboardModule } from './components/company-dashboard/company-dashboard.module';

import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { GlobalWrapperComponent } from './components/global-wrapper/global-wrapper/global-wrapper.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { UserRegisterComponent } from './components/user/user-register/user-register.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    GlobalWrapperComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NavigationModule,
    ComputerDashboardModule,
    CompanyDashboardModule,
    FormsModule,
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
