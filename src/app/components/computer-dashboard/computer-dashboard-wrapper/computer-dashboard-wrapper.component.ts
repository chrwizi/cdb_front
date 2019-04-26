import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computer-dashboard-wrapper',
  templateUrl: './computer-dashboard-wrapper.component.html',
  styleUrls: ['./computer-dashboard-wrapper.component.scss']
})

export class ComputerDashboardWrapperComponent implements OnInit {

  filter: string = '';
  deleteMode: boolean = false;
  deleted: boolean = this.route.snapshot.queryParamMap.get("refresh") === "1";

  constructor(private route: ActivatedRoute) {
    if(this.deleted) {
      this.deleteMode = true;
    }
  }

  ngOnInit(): void {}

  refresh(filter): void {
    console.debug("Wrapper received", filter)
    this.filter = filter;
  }

  changeDeleteMode(deleteMode: boolean) {
    this.deleteMode = deleteMode;
  }
}
