import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/services/company/company.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-add-form',
  templateUrl: './company-add-form.component.html',
  styleUrls: ['./company-add-form.component.scss']
})
export class CompanyAddFormComponent implements OnInit {

  companyAddForm : FormGroup = this.fb.group({
    name: ['', Validators.required]
  });

  constructor(
    private companyService: CompanyService,
    private fb: FormBuilder
  ) { }

  ngOnInit() : void {
  
  }

  onSubmit() : void {
    this.companyService.add(this.companyAddForm.value).subscribe(
      success => console.debug('Company added'),
      error => console.error('There was an error adding the company')
    );
  }

}