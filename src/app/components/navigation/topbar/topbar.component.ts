import { Component, OnInit, Input } from '@angular/core';
import { LoggingService } from 'src/app/services/logging/logging.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})

export class TopbarComponent implements OnInit {

  constructor(private loggingService:LoggingService, private router : Router) { }


  username: string;

  isLogged: boolean;

  ngOnInit() {
    this.isLogged = this.loggingService.isLoggedIn();
    this.username = this.loggingService.getUser()
    console.log("username :"+this.username);
  }



  // logout() {
  //   this.loggingService.logout()
  //     .subscribe(success => {
  //       if (success) {
  //         this.router.navigate(['/login']);
  //       }
  //     });
  // }

  logout() {
    this.loggingService.removeTokens();
    this.router.navigate(['/login']);
  }

  mainRoute(){
    this.router.navigate(['/computers']);
  }


}
