import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-filters',
  templateUrl: './company-filters.component.html',
  styleUrls: ['./company-filters.component.scss']
})
export class CompanyFiltersComponent implements OnInit {
  @Output()
  onDeleteChanged = new EventEmitter<boolean>();

  deleteMode: boolean = false;
  deleted: boolean = this.route.snapshot.queryParamMap.get("refresh") === "1";
  done: boolean= false;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {}

  toggleDelete(): void {
    if(!this.done && this.deleted){
      this.deleteMode = true;
      this.deleted = false;
      this.done = false;
    }
    this.deleteMode = !this.deleteMode;
    this.onDeleteChanged.emit(this.deleteMode);
  }
}
