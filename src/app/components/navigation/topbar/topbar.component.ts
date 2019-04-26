import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoggingService } from 'src/app/services/logging/logging.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})

export class TopbarComponent implements OnInit {

  constructor(private translate: TranslateService,private loggingService:LoggingService, private router : Router) {
    this.translate.setDefaultLang('fr');
  }
  username: string;
  isLogged: boolean;

  useLanguage(language: string) {
    this.translate.use(language);
  }

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
