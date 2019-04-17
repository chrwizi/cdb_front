import { Component, OnInit } from '@angular/core';
import { Computer } from 'src/app/models/computer.model';
import { ComputerService } from 'src/app/services/computer/computer.service';
import { Mock } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-computer-table',
  templateUrl: './computer-table.component.html',
  styleUrls: ['./computer-table.component.scss']
})

export class ComputerTableComponent implements OnInit {
  computers: Computer[] = [
    {
        id: 0,
        name: 'Macintosh',
        introduced: '20/05/2002',
        discontinued: '12/06/2008',
        company:
            {
                id: 0,
                name: 'Apple',
            }
    },
    {
        id: 1,
        name: 'Omen',
        introduced: '15/11/2009',
        discontinued: '28/10/2015',
        company:
            {
                id: 1,
                name: 'HP'
            }
    },
    {
        id: 2,
        name: 'Powerbook',
        introduced: '10/03/1998',
        discontinued: '12/08/2006',
        company:
            {
                id: 2,
                name: 'ASUS',
            }
    },
    {
        id: 3,
        name: 'Inspiron',
        introduced: '24/05/2012',
        discontinued: '19/11/2016',
        company:
            {
                id: 1,
                name: 'HP'
            }
    }
  ];

  constructor(private computerService: ComputerService){
  }

  ngOnInit(): void {
    this.computerService.getComputers().subscribe(
      computers => this.computers = computers
    );
  }
 

}
