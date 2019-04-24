import { Component, Input } from '@angular/core';
import { Company } from 'src/app/models/company.model';

@Component({
  selector: 'app-company-row',
  templateUrl: './company-row.component.html',
  styleUrls: ['./company-row.component.scss']
})

export class CompanyRowComponent {
  @Input()
  company: Company;
}
