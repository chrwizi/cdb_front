import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { LoggingService } from 'src/app/services/logging/logging.service';

@Injectable({
  providedIn: 'root'
})
export class ComputerGuard implements CanActivate, CanLoad {

  constructor(private authService: LoggingService, private router: Router) { }

  canActivate() {
    return this.canLoad();
  }

  canLoad() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      console.log("islogged " + this.authService.isLoggedIn());
    }
    return this.authService.isLoggedIn();
  }
}
