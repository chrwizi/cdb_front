import { MatSnackBar, MatPaginator } from '@angular/material';
import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CompanyService } from 'src/app/services/company/company.service';
import { Router } from '@angular/router';
import { ErrorService } from 'src/app/error/error.service';

@Component({
  selector: 'app-company-delete-form',
  templateUrl: './company-delete-form.component.html',
  styleUrls: ['./company-delete-form.component.scss']
})
export class CompanyDeleteFormComponent {
  @Input()
  id: String;
  companyDeleteForm: FormGroup = this.fb.group({});
  
  constructor(
    private companyService: CompanyService, 
    private fb: FormBuilder, 
    private router: Router,
    private errorService: ErrorService
  ) { }

  onSubmit() {
    if(confirm("You are about to delete a company:")) {
      this.companyService.delete(this.id).subscribe(
        data => {
          console.debug('Company deletion successful');
          this.router.navigateByUrl('/refresh', {skipLocationChange: true})
            .then(
              () =>{ 
                this.router.navigate(["companies"], { queryParams: { refresh: 1 }});
                this.errorService.success('The company was successfully deleted');
              }
            );

        },
        error => this.errorService.error('There was an error deleting a company')
      );
    }
  }
}
