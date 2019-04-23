import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  myGroup = new FormGroup({
    username: new FormControl()
 });

  hide = true;

  

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    
  }

}
