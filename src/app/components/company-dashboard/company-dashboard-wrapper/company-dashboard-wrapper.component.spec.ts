import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDashboardWrapperComponent } from './company-dashboard-wrapper.component';

describe('CompanyDashboardWrapperComponent', () => {
  let component: CompanyDashboardWrapperComponent;
  let fixture: ComponentFixture<CompanyDashboardWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyDashboardWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDashboardWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
