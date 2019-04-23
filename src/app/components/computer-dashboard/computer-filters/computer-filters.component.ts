import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDatepicker } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

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
  deleted: boolean = false;

  filterForm = new FormGroup({
    name: new FormControl,
    company: new FormGroup({
      id: new FormControl,
      name: new FormControl
    })
  });

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {}
  
  onSubmit(): void {
    this.fitersChanged.emit(null);
  }

  toggleDelete(): void {
    if(this.route.snapshot.queryParamMap.get("refresh") === "1" && this.deleted === false){
      this.deleteMode = true
      this.deleted = true;
    }
    this.deleteMode = !this.deleteMode;
    this.onDeleteChanged.emit(this.deleteMode);
    console.log(this.deleteMode);
  }
}
