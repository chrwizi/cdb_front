import { FormGroup, FormBuilder } from '@angular/forms';
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
  deleted: boolean = this.route.snapshot.queryParamMap.get("refresh") === "1";
  done: boolean= false;
  
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
    if(!this.done && this.deleted){
      this.deleteMode = true;
      this.deleted = false;
      this.done = false;
    }
    this.deleteMode = !this.deleteMode;
    this.onDeleteChanged.emit(this.deleteMode);
    console.log(this.deleteMode);
  }
}
