import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, Input, Output } from '@angular/core';
import { MatDatepicker } from '@angular/material';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-computer-filters',
  templateUrl: './computer-filters.component.html',
  styleUrls: ['./computer-filters.component.scss']
})
export class ComputerFiltersComponent implements OnInit {

  @Output()
  fitersChanged: EventEmitter = new EventEmitter();

  filterForm = new FormGroup({
    name: new FormControl,
    company: new FormGroup({
      id: new FormControl,
      name: new FormControl
    })
  });

  constructor() { }

  ngOnInit() : void {
  }
  
  onSubmit() : void {
    this.fitersChanged.emit(null);
  }

}
