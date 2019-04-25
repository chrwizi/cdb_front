import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavigationModule } from './components/navigation/navigation.module';
import { ComputerDashboardModule } from './components/computer-dashboard/computer-dashboard.module';
import { CompanyDashboardModule } from './components/company-dashboard/company-dashboard.module';

import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { GlobalWrapperComponent } from './components/global-wrapper/global-wrapper/global-wrapper.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { UserRegisterComponent } from './components/user/user-register/user-register.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth/guards/auth.guard';
import { ComputerGuard } from './auth/guards/computer.guard';
import { TokenInterceptor } from './auth/token.interceptor';
import { LoggingService } from './services/logging/logging.service';



@NgModule({
  declarations: [
    AppComponent,
    GlobalWrapperComponent,
    UserRegisterComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NavigationModule,
    ComputerDashboardModule,
    CompanyDashboardModule,
    FormsModule,
    CustomMaterialModule,
  ],
  providers: [AuthGuard,
    ComputerGuard,
    LoggingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

