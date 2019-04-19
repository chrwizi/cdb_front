import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/models/company.model';
import { Computer } from 'src/app/models/computer.model';
import { ComputerService } from './../../../services/computer/computer.service';
import { CompanyService } from './../../../services/company/company.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computer-update-form',
  templateUrl: './computer-update-form.component.html',
  styleUrls: ['./computer-update-form.component.scss']
})
export class ComputerUpdateFormComponent implements OnInit {

  companies: Company[];
  computer: Computer;
  id: string;
  computerEditForm: FormGroup = this.fb.group({
    id: [''],
    name: [''],
    introduced: [''],
    discontinued: [''],
    companyId: [''],
    company: ['']
  });
  
  constructor(
    private computerService: ComputerService, 
    private companyService: CompanyService, 
    private fb: FormBuilder, 
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    // Retrieving Companies for the select
    this.companyService.getCompanies().subscribe(
      companies => {
        console.debug("companies", companies)
        this.companies = companies
      },
      error => console.error('There was an error retrieving the companies') 
    )

    // Retrieving / Setting the id.
    this.id = this.route.snapshot.paramMap.get("id");

    // Retrieving the Computer data
    this.computerService.getComputer(this.id).subscribe(
      computer => {
        console.debug('computer', computer);
        this.computerEditForm.setValue(computer)
      },
      error => console.error("There was an error retrieving the computer with id " + this.id)
    );

  }

  onSubmit(): void {
    console.debug('computer', this.computerEditForm.value);

    this.computerService.update(this.computerEditForm.value).subscribe(
      success => console.debug('Successfully updated'),
      error => console.debug('There was an error updating the computer')
    );
  }

}