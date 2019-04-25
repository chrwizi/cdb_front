import { ErrorService } from 'src/app/error/error.service';
import { MatSnackBar } from '@angular/material';
import { Component, Input } from '@angular/core';
import { ComputerService } from 'src/app/services/computer/computer.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-computer-delete-form',
  templateUrl: './computer-delete-form.component.html',
  styleUrls: ['./computer-delete-form.component.scss']
})
export class ComputerDeleteFormComponent {
  @Input()
  id: String;
  computerDeleteForm: FormGroup = this.fb.group({});

  constructor(
    private computerService: ComputerService, 
    private fb: FormBuilder, 
    private router: Router,
    private errorService: ErrorService
  ) { }

  onSubmit() {
    if(confirm("You are about to delete a computer:")) {
      this.computerService.delete(this.id).subscribe(
        data => {
          console.debug('Computer deletion successful');
          this.router.navigateByUrl('/refresh', {skipLocationChange: true})
            .then(
              () => {
                this.router.navigate(["computers"], { queryParams: { refresh: 1 }});
                this.errorService.success('The computer was successfully deleted');
              }
            ); 
        },
        error => this.errorService.error('There was an error deleting the computer')
      );
    }
  }
}
