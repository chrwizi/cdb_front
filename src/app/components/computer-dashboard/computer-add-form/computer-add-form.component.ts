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
  
  constructor(private companyService: CompanyService, private computerService: ComputerService, private fb: FormBuilder) {}
  
  companies: Array<Company>;

  computerAddForm: FormGroup = this.fb.group({
    name: [''],
    introduction: [''],
    discontinuation: [''],
    company: ['']
  });

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(
      companies => {
        console.debug('companies ', companies)
        this.companies = companies 
      },
      error => console.debug('There was an error retrieving the companies')
    );
  }

  onSubmit(): void {
    console.debug(this.computerAddForm.value);

    this.computerService.add(this.computerAddForm.value).subscribe(
      success => console.debug('success'),
      error => console.debug('error')
    )
  }

}
