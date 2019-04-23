import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-computer-dashboard-wrapper',
  templateUrl: './computer-dashboard-wrapper.component.html',
  styleUrls: ['./computer-dashboard-wrapper.component.scss']
})
export class ComputerDashboardWrapperComponent implements OnInit {

  @Output()
  filterChanged: EventEmitter<string> = new EventEmitter();
  filter: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  refresh($event): void {
    console.debug("Wrapper received", $event)
    this.filter = $event.filter;
  }

}
