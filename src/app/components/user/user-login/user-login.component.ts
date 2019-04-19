import { LoggingService } from './../../../services/logging/logging.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  hide = true;
  loggingForm: FormGroup = this.fb.group({
    username: [''],
    password: ['']
  })

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
