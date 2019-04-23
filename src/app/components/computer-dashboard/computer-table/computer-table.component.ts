import { Computer } from 'src/app/models/computer.model';
import { ComputerService } from 'src/app/services/computer/computer.service';
import { Component, OnInit, ViewChild, Input, SimpleChanges } from '@angular/core';
import { MatPaginator } from '@angular/material';

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



