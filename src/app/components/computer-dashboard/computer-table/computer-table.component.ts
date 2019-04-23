import { Computer } from 'src/app/models/computer.model';
import { ComputerService } from 'src/app/services/computer/computer.service';
import { Component, OnInit, ViewChild, Input, SimpleChanges } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';

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
  displayedColumns: string[] = ['name', 'introduced', 'discontinued', 'company', 'id'];

  constructor(private computerService: ComputerService, private router:Router){
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.computerService.getComputers().subscribe( computers => {
      this.computers = computers
      this.dataSource = new MatTableDataSource<Computer>(this.computers);
      this.dataSource.paginator = this.paginator;
    }  );
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.debug('Filter method triggered with ', this.filter);
    this.computerService.getComputers().subscribe( computers => this.computers = computers);
  }

  onComputerEdit(id :String):void{
    this.router.navigate(['computers/edit/'+id]);
  }

}



