import { LoggingService } from './../../../services/logging/logging.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, ValidatorFn, ValidationErrors} from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  public minPw: number = 8;

  registerForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(this.minPw)]],
    password2: ['', [Validators.required]]
  }, {validator: passwordMatchValidator});

  constructor(
    private fb: FormBuilder,
    private loggingService: LoggingService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() : void {
    console.debug('Register', this.registerForm.value);
    this.loggingService.register(this.registerForm.value)
  }

  onPasswordInput(): void {
    this.registerForm.controls.password.hasError('passwordMismatch') 
    ? this.registerForm.get('password2').setErrors([{'passwordMismatch': true}])
    : this.registerForm.get('password2').setErrors(null);
  }

  getErrorMessage(): string {
    return this.registerForm.controls.email.hasError('required') ? 'You must enter a value' :
        this.registerForm.get('email').hasError('email') ? 'Not a valid email' :
            '';
  } 

}

export const passwordMatchValidator: ValidatorFn = (formGroup: FormGroup): ValidationErrors | null => {
  if (formGroup.get('password').value !== formGroup.get('password2').value){
    return {passwordMismatch: true};
  }
  return null;
};
