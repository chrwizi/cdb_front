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
  deleted: boolean= false;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {}

  toggleDelete(): void {
    if(this.route.snapshot.queryParamMap.get("refresh") === "1" && this.deleted === false){
      this.deleteMode = true
      this.deleted = true;
    }
    this.deleteMode = !this.deleteMode;
    this.onDeleteChanged.emit(this.deleteMode);
  }
}
