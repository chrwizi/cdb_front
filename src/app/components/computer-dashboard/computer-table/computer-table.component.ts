import { Component, OnInit } from '@angular/core';
import { Computer } from 'src/app/models/computer.model';
import { ComputerService } from 'src/app/services/computer/computer.service';

@Component({
  selector: 'app-computer-table',
  templateUrl: './computer-table.component.html',
  styleUrls: ['./computer-table.component.scss']
})
export class ComputerTableComponent implements OnInit {
  computers: Computer[];

  constructor(private computerService: ComputerService){
  }
  
  ngOnInit() {
    this.computerService.getComputers().subscribe(
      computers => this.computers = computers
    );
  }

}
