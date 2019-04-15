import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAddFormComponent } from './company-add-form.component';

describe('CompanyAddFormComponent', () => {
  let component: CompanyAddFormComponent;
  let fixture: ComponentFixture<CompanyAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
