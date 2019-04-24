import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCountComponent } from './company-count.component';

describe('CompanyCountComponent', () => {
  let component: CompanyCountComponent;
  let fixture: ComponentFixture<CompanyCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
