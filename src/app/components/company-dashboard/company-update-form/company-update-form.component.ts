import { ErrorService } from 'src/app/error/error.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company/company.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-update-form',
  templateUrl: './company-update-form.component.html',
  styleUrls: ['./company-update-form.component.scss']
})
export class CompanyUpdateFormComponent implements OnInit {

  companyEditForm: FormGroup = this.fb.group({
    id: [''],
    name: ['']
  });

  constructor(
    private companyService: CompanyService, 
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private errorService: ErrorService
  ) { }

  ngOnInit() : void {
    let id = this.route.snapshot.paramMap.get("id");
    
    this.companyService.getCompany(id).subscribe(
      company => {
        console.debug('company', company);
        this.companyEditForm.setValue(company);
      },
      error => this.errorService.error('There was an error retrieving the company')
    ); 
  }

  onSubmit() : void {
    this.companyService.update(this.companyEditForm.value).subscribe(
      success => {
        this.router.navigate(["companies"]);
        this.errorService.success('The company has been updated successfully');
      },
      error => this.errorService.error('There was an error updating the company')
    );
  }

}