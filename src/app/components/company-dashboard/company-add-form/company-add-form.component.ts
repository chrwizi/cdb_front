import { Router } from '@angular/router';
import { ErrorService } from './../../../error/error.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/services/company/company.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-company-add-form',
  templateUrl: './company-add-form.component.html',
  styleUrls: ['./company-add-form.component.scss']
})
export class CompanyAddFormComponent implements OnInit {

  companyAddForm : FormGroup = this.fb.group({
    id: [''],
    name: ['', Validators.required]
  });

  constructor(
    private companyService: CompanyService,
    private fb: FormBuilder,
    private router: Router,
    private errorService: ErrorService
  ) { }

  ngOnInit() : void {
  
  }

  onSubmit() : void {
    this.companyService.add(this.companyAddForm.value).subscribe(
      success => {
        this.router.navigate(["companies"], { queryParams: { refresh: 1 }});
        this.errorService.success('The company has been created successfully');
      },
      error => this.errorService.error('There was an error adding the company')
    );
  }

}