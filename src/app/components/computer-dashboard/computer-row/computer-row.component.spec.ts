import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerRowComponent } from './computer-row.component';

describe('ComputerRowComponent', () => {
  let component: ComputerRowComponent;
  let fixture: ComponentFixture<ComputerRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
