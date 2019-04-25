import { ErrorService } from './../../../error/error.service';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/models/company.model';
import { Computer } from 'src/app/models/computer.model';
import { ComputerService } from './../../../services/computer/computer.service';
import { CompanyService } from './../../../services/company/company.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-computer-update-form',
  templateUrl: './computer-update-form.component.html',
  styleUrls: ['./computer-update-form.component.scss']
})
export class ComputerUpdateFormComponent implements OnInit {

  companies: Company[];
  computer: Computer;
  computerEditForm: FormGroup = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    introduced: [''],
    discontinued: [''],
    companyId: ['', Validators.required],
    company: ['']
  });
  
  constructor(
    private computerService: ComputerService, 
    private companyService: CompanyService, 
    private fb: FormBuilder, 
    private route: ActivatedRoute,
    private errorService: ErrorService
  ) { }

  ngOnInit(): void {

    this.companyService.getCompanies().subscribe(
      companies => {
        console.debug("companies", companies)
        this.companies = companies
      },
      error => this.errorService.error('There was an error retrieving the companies') 
    )

    let id = this.route.snapshot.paramMap.get("id");

    this.computerService.getComputer(id).subscribe(
      computer => {
        console.debug('computer', computer);
        this.computerEditForm.setValue(computer)
      },
      error => this.errorService.error("There was an error retrieving the computer with id " + id)
    );

  }

  onSubmit(): void {
    console.debug('computer', this.computerEditForm.value);

    this.computerService.update(this.formatDate(this.computerEditForm.value)).subscribe(
      success => console.debug('Successfully updated'),
      error => this.errorService.error('There was an error updating the computer')
    );
  }

  formatDate(computer: Computer): Computer{
    computer.introduced = computer.introduced ? moment(computer.introduced).format('YYYY-MM-DD') : null;
    computer.discontinued = computer.discontinued ? moment(computer.discontinued).format('YYYY-MM-DD') : null;
    return computer;
  }
}