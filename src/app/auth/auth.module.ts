import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { AuthGuard } from './guards/auth.guard';
import { RandomGuard } from './guards/random.guard';
import { TokenInterceptor } from './token.interceptor';
import { LoggingService } from '../services/logging/logging.service';
import { UserLoginComponent } from '../components/user/user-login/user-login.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';

@NgModule({
  declarations: [UserLoginComponent],
  providers: [
    AuthGuard,
    RandomGuard,
    LoggingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    CustomMaterialModule,
  ]
})
export class AuthModule { }
