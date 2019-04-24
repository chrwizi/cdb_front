import { LoggingService } from './../../../services/logging/logging.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  hide: boolean = true;
  loggingForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private loggingService: LoggingService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(): void {

    this.loggingService.log(this.loggingForm.value).subscribe(
      success => {
        if (success) {
          this.router.navigate(['/computers']);
        }
      },
      error => console.debug('error')
    );
  }

}
