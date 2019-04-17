import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Company } from 'src/app/models/company.model';

@Component({
  selector: 'app-computer-add-form',
  templateUrl: './computer-add-form.component.html',
  styleUrls: ['./computer-add-form.component.scss']
})
export class ComputerAddFormComponent implements OnInit {
  
  companies: Array<Company>;

  computerAddForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    discontinued: new FormControl(''),
    introduced: new FormControl(''),
    companyId: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
    this.companies = [];
  }

  onSubmit(): void {
    console.log('it works!');
  }

}
