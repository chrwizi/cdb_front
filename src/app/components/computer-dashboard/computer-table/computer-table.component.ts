import { Computer } from 'src/app/models/computer.model';
import { ComputerService } from 'src/app/services/computer/computer.service';
<<<<<<< HEAD
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
=======
import { Component, OnInit, ViewChild, Input, SimpleChanges } from '@angular/core';
import { MatPaginator } from '@angular/material';

>>>>>>> [FILTER] Pass filter value so that we can refresh the computer table

@Component({
  selector: 'app-computer-table',
  templateUrl: './computer-table.component.html',
  styleUrls: ['./computer-table.component.scss']
})

export class ComputerTableComponent implements OnInit {
<<<<<<< HEAD
  @Input()
  deleteMode: boolean;
  
=======

  @Input()
  filter: string;

>>>>>>> [FILTER] Pass filter value so that we can refresh the computer table
  computers: Computer[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['name', 'introduced', 'discontinued', 'company', 'id'];


  constructor(
    private computerService: ComputerService
  ) { }

  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.debug('Filter method triggered with ', this.filter);
    this.computerService.getComputers().subscribe( computers => this.computers = computers);
  }

}



