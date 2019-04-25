import { Computer } from 'src/app/models/computer.model';
import { ErrorService } from './../../../error/error.service';
import { MatSnackBar } from '@angular/material';
import { CompanyService } from './../../../services/company/company.service';
import { ComputerService } from './../../../services/computer/computer.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Company } from 'src/app/models/company.model';
import * as moment from 'moment';

@Component({
  selector: 'app-computer-add-form',
  templateUrl: './computer-add-form.component.html',
  styleUrls: ['./computer-add-form.component.scss']
})
export class ComputerAddFormComponent implements OnInit {
  
  companies: Array<Company>;
  computerAddForm: FormGroup = this.fb.group({
    id: '',
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

    this.computerService.add(this.formatDate(this.computerAddForm.value)).subscribe(
      success => this.errorService.success('The computer was successfully added'),
      error => this.errorService.error('There was an error adding a new computer')
    );
  }

  formatDate(computer: Computer): Computer{
    computer.introduced = computer.introduced ? moment(computer.introduced).format('YYYY-MM-DD') : "";
    computer.discontinued = computer.discontinued ? moment(computer.discontinued).format('YYYY-MM-DD') : "";
    return computer;
  }

}
