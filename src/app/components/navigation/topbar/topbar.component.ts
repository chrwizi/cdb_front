import { Component, OnInit } from '@angular/core';
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

  ngOnInit() {
    this.username = this.loggingService.getUser()
  }

  logout() {
    this.loggingService.logout()
      .subscribe(success => {
        if (success) {
          this.router.navigate(['/login']);
        }
      });
  }

}
