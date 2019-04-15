import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerDashboardWrapperComponent } from './computer-dashboard-wrapper.component';

describe('ComputerDashboardWrapperComponent', () => {
  let component: ComputerDashboardWrapperComponent;
  let fixture: ComponentFixture<ComputerDashboardWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerDashboardWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerDashboardWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
