import { CompanyService } from './../../../services/company/company.service';
import { ComputerService } from './../../../services/computer/computer.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Company } from 'src/app/models/company.model';

@Component({
  selector: 'app-computer-add-form',
  templateUrl: './computer-add-form.component.html',
  styleUrls: ['./computer-add-form.component.scss']
})
export class ComputerAddFormComponent implements OnInit {
  
  companies: Array<Company>;
  computerAddForm: FormGroup = this.fb.group({
    name: [''],
    introduction: [''],
    discontinuation: [''],
    company: ['']
  });

  constructor(
    private companyService: CompanyService, 
    private computerService: ComputerService, 
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(
      companies => {
        console.debug('companies', companies)
        this.companies = companies 
      },
      error => console.error('There was an error retrieving the companies')
    );
  }

  onSubmit(): void {
    console.debug(this.computerAddForm.value);

    this.computerService.add(this.computerAddForm.value).subscribe(
      success => console.debug('success'),
      error => console.error('There was an error adding a new computer')
    );
  }

}
