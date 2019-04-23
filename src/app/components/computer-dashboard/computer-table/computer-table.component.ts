import { Computer } from 'src/app/models/computer.model';
import { ComputerService } from 'src/app/services/computer/computer.service';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-computer-table',
  templateUrl: './computer-table.component.html',
  styleUrls: ['./computer-table.component.scss']
})

export class ComputerTableComponent implements OnInit {
  @Input()
  deleteMode: boolean;
  
  computers: Computer[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['name', 'introduced', 'discontinued', 'company', 'id'];


  constructor(private computerService: ComputerService){
    //this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    //this.dataSource.paginator = this.paginator;
    this.computerService.getComputers().subscribe( computers => this.computers = computers );
  }

}



