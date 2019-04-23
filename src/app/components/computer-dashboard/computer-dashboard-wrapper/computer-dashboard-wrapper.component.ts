import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computer-dashboard-wrapper',
  templateUrl: './computer-dashboard-wrapper.component.html',
  styleUrls: ['./computer-dashboard-wrapper.component.scss']
})
export class ComputerDashboardWrapperComponent implements OnInit {
  deleteMode: boolean = false;
  constructor() {}

  ngOnInit() {}

  eventHandler(){
    console.debug('it works');
  }

  changeDeleteMode(deleteMode: boolean) {
    this.deleteMode = deleteMode;
  }
}
