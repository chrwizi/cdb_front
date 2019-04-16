import {Component, OnInit} from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { CompanyService } from 'src/app/services/company/company.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.scss']
})




export class CompanyTableComponent implements OnInit{

  tableHeader: any[];
  companies: Company[];

  constructor(private companyService: CompanyService,  private router: ActivatedRoute) {
    this.tableHeader = ['company', 'name' , 'Introduced date', 'discontinued date '];
  }

  ngOnInit() {
    this.companyService.getCompanies().subscribe(
      companies => this.companies = companies
    );
  }
}
