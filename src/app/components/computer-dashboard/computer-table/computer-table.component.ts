import { Computer } from 'src/app/models/computer.model';
import { ComputerService } from 'src/app/services/computer/computer.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Component, OnInit, ViewChild, SimpleChanges, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-computer-table',
  templateUrl: './computer-table.component.html',
  styleUrls: ['./computer-table.component.scss']
})

export class ComputerTableComponent implements OnInit {

  @Input()
  deleteMode: boolean;

  @Input()
  filter: string;

  computers: Computer[];
  dataSource = new MatTableDataSource<Computer>(this.computers);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  displayedColumns: string[] = ['name', 'introduced', 'discontinued', 'company', 'id'];

  constructor(
    private computerService: ComputerService, 
    private router:Router, 
    private route: ActivatedRoute
  ){
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.paginator.pageIndex = parseInt(this.route.snapshot.queryParamMap.get("page"));
    this.paginator.pageSize = parseInt(this.route.snapshot.queryParamMap.get("rows"));
    this.computerService.getComputers().subscribe( computers => {
      this.computers = computers
      this.dataSource = new MatTableDataSource<Computer>(this.computers);
      this.dataSource.paginator = this.paginator;
    }  );
  }

  onComputerEdit(id: String): void {
    this.router.navigate(['computers/edit/' + id]);
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['filter'] && changes['filter'].previousValue != changes['filter'].currentValue && !changes['filter'].firstChange){
      console.debug('Filter method triggered with ', this.filter);
      this.computerService.getComputers().subscribe( 
        computers => {
        this.computers = computers;
        this.dataSource = new MatTableDataSource<Computer>(this.computers);
        this.dataSource.paginator = this.paginator;  
        }     
      );
    }
  }
}



