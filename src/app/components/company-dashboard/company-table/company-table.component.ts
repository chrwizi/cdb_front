import {Component, OnInit, ViewChild, Input} from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { CompanyService } from 'src/app/services/company/company.service';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'app-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.scss']
})


export class CompanyTableComponent implements OnInit{
  @Input()
  deleteMode: boolean;
  
  companies: Company[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['name', 'id'];

  constructor(private companyService: CompanyService, private route: ActivatedRoute) {}

  ngOnInit() {
    if(this.route.snapshot.queryParamMap.get("refresh") === "1"){
      this.deleteMode = true;
    }

    this.companyService.getCompanies().subscribe(
       companies => this.companies = companies
    );
  }
}
