import { LoggingService } from './../../../services/logging/logging.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
    private loggingService: LoggingService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.loggingService.log(this.loggingForm.value).subscribe(
      success => console.debug('success'),
      error => console.debug('error')
    );
  }

}
