import { ErrorService } from './../../../error/error.service';
import { MatSnackBar } from '@angular/material';
import { CompanyService } from './../../../services/company/company.service';
import { ComputerService } from './../../../services/computer/computer.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Company } from 'src/app/models/company.model';

@Component({
  selector: 'app-computer-add-form',
  templateUrl: './computer-add-form.component.html',
  styleUrls: ['./computer-add-form.component.scss']
})
export class ComputerAddFormComponent implements OnInit {
  
  companies: Array<Company>;
  computerAddForm: FormGroup = this.fb.group({
    computerName: ['', Validators.required],
    introduced: [''],
    discontinued: [''],
    company: [''],
    companyId: ['', Validators.required]
  });

  constructor(
    private companyService: CompanyService, 
    private computerService: ComputerService, 
    private fb: FormBuilder,
    private errorService: ErrorService
  ) {}

  ngOnInit() : void {
    this.companyService.getCompanies().subscribe(
      companies => {
        console.debug('companies', companies)
        this.companies = companies 
      },
      error => this.errorService.error('There was an error retrieving the companies')
    );
  }

  onSubmit() : void {
    console.debug(this.computerAddForm.value);

    this.computerService.add(this.computerAddForm.value).subscribe(
      success => this.errorService.success('The computer was successfully added'),
      error => this.errorService.error('There was an error adding a new computer')
    );
  }

}
