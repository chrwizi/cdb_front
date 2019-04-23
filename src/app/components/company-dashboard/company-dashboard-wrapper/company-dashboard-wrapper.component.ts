import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-dashboard-wrapper',
  templateUrl: './company-dashboard-wrapper.component.html',
  styleUrls: ['./company-dashboard-wrapper.component.scss']
})
export class CompanyDashboardWrapperComponent implements OnInit {
  deleteMode: boolean = false;

  constructor() {}

  ngOnInit() {}

  
  changeDeleteMode(deleteMode: boolean) {
    this.deleteMode = deleteMode;
  }
}
