import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-computer-filters',
  templateUrl: './computer-filters.component.html',
  styleUrls: ['./computer-filters.component.scss']
})
export class ComputerFiltersComponent implements OnInit {

  @Output()
  filter: EventEmitter<string> = new EventEmitter();

  @Output()
  onDeleteChanged = new EventEmitter<boolean>();

  deleteMode: boolean = false;
  deleted: boolean = false;

  filterForm: FormGroup = this.fb.group({
   filter: ['']
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {}
  
  onSubmit() : void {
    console.debug("Computer filter component called wrapper with", this.filterForm.value);
    this.filter.emit(this.filterForm.value.filter);
  }

  toggleDelete(): void {
    if(this.route.snapshot.queryParamMap.get("refresh") === "1" && this.deleted === false){
      this.deleteMode = true
      this.deleted = true;
    }
    this.deleteMode = !this.deleteMode;
    this.onDeleteChanged.emit(this.deleteMode);
  }
}
