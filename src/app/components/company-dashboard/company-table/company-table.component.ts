import {Component, OnInit, ViewChild, Input} from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { CompanyService } from 'src/app/services/company/company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.scss']
})

export class CompanyTableComponent implements OnInit{
  @Input()
  deleteMode: boolean;
  
  companies: Company[];
  dataSource = new MatTableDataSource<Company>(this.companies);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  displayedColumns: string[] = ['name', 'id'];

  constructor(private companyService: CompanyService, private router: Router, private route: ActivatedRoute) {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.paginator.pageIndex = parseInt(this.route.snapshot.queryParamMap.get("page"));
    this.paginator.pageSize = parseInt(this.route.snapshot.queryParamMap.get("rows"));
    this.companyService.getCompanies().subscribe(
       companies => {
        this.companies = companies;
        this.dataSource = new MatTableDataSource<Company>(this.companies);
        this.dataSource.paginator = this.paginator;
       }
    );
  }

  onCompanyEdit(id :String):void{
    this.router.navigate(['companies/edit/'+id]);
  }
}
