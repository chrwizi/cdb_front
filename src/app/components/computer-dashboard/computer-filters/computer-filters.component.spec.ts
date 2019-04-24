import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerFiltersComponent } from './computer-filters.component';

describe('ComputerFiltersComponent', () => {
  let component: ComputerFiltersComponent;
  let fixture: ComponentFixture<ComputerFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
