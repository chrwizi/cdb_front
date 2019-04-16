import { Component, Input } from '@angular/core';
import { Computer } from 'src/app/models/computer.model';

@Component({
  selector: 'app-computer-row',
  templateUrl: './computer-row.component.html',
  styleUrls: ['./computer-row.component.scss']
})
export class ComputerRowComponent {
  @Input()
  computer: Computer;
}
