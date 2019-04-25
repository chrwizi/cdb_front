import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-dashboard-wrapper',
  templateUrl: './company-dashboard-wrapper.component.html',
  styleUrls: ['./company-dashboard-wrapper.component.scss']
})
export class CompanyDashboardWrapperComponent implements OnInit {
  deleteMode: boolean = false;
  deleted: boolean = this.route.snapshot.queryParamMap.get("refresh") === "1";

  constructor(private route: ActivatedRoute) {
    if(this.deleted) {
      this.deleteMode = true;
    }
  }
  ngOnInit() {}

  
  changeDeleteMode(deleteMode: boolean) {
    this.deleteMode = deleteMode;
  }
}
