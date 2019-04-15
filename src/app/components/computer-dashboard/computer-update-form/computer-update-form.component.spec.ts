import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerUpdateFormComponent } from './computer-update-form.component';

describe('ComputerUpdateFormComponent', () => {
  let component: ComputerUpdateFormComponent;
  let fixture: ComponentFixture<ComputerUpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerUpdateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
