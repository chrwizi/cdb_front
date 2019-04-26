import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoggingService } from 'src/app/services/logging/logging.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: LoggingService, private router: Router) { }

  canActivate() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/computers']);
      console.log("islogged " + this.authService.isLoggedIn());
    }
    return !this.authService.isLoggedIn();
  }
}
