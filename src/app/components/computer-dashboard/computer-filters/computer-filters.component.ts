import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDatepicker } from '@angular/material';

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

  filterForm = new FormGroup({
    name: new FormControl,
    company: new FormGroup({
      id: new FormControl,
      name: new FormControl
    })
  });

  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit(): void {
    this.fitersChanged.emit(null);
  }

  toggleDelete(): void {
    this.deleteMode = !this.deleteMode;
    this.onDeleteChanged.emit(this.deleteMode);
  }
}
