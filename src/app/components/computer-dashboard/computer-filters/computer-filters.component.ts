import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-computer-filters',
  templateUrl: './computer-filters.component.html',
  styleUrls: ['./computer-filters.component.scss']
})
export class ComputerFiltersComponent implements OnInit {

  @Output()
  fitersChanged: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onDeleteChanged = new EventEmitter<boolean>();

  deleteMode: boolean = false;
  filter: EventEmitter<string> = new EventEmitter();

  filterForm: FormGroup = this.fb.group({
   filter: ['']
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }
  
  onSubmit() : void {
    console.debug("Computer filter component called wrapper with", this.filterForm.value);
    this.filter.emit(this.filterForm.value);
  }

  toggleDelete(): void {
    this.deleteMode = !this.deleteMode;
    this.onDeleteChanged.emit(this.deleteMode);
  }
}
