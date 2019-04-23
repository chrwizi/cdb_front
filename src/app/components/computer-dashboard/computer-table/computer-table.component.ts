import { Computer } from 'src/app/models/computer.model';
import { ComputerService } from 'src/app/services/computer/computer.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-computer-table',
  templateUrl: './computer-table.component.html',
  styleUrls: ['./computer-table.component.scss']
})

export class ComputerTableComponent implements OnInit {
  computers: Computer[];
  dataSource = new MatTableDataSource<Computer>(this.computers);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  displayedColumns: string[] = ['name', 'introduced', 'discontinued', 'company'];


  constructor(private computerService: ComputerService){
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.computerService.getComputers().subscribe( computers => {
      this.computers = computers
      this.dataSource = new MatTableDataSource<Computer>(this.computers);
      this.dataSource.paginator = this.paginator;
    }  );
    
  }

}



