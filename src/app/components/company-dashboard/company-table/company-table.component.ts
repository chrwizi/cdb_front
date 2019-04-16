<<<<<<< HEAD
import {Component, OnInit} from '@angular/core';
=======
import { Component } from '@angular/core';
>>>>>>> [wip] services and table/row components
import { Company } from 'src/app/models/company.model';
import { CompanyService } from 'src/app/services/company/company.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.scss']
})

<<<<<<< HEAD



export class CompanyTableComponent implements OnInit{

  tableHeader: any[];
  companies: Company[];

  constructor(private companyService: CompanyService,  private router: ActivatedRoute) {
    this.tableHeader = ['company', 'name' , 'Introduced date', 'discontinued date '];
=======
export class CompanyTableComponent {
  companies: Company[];

  constructor(private companyService: CompanyService,  private router : ActivatedRoute){
>>>>>>> [wip] services and table/row components
  }

  ngOnInit() {
    this.companyService.getCompanies().subscribe(
      companies => this.companies = companies
    );
  }
}
