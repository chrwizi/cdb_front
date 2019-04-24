import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerDeleteFormComponent } from './computer-delete-form.component';

describe('ComputerDeleteFormComponent', () => {
  let component: ComputerDeleteFormComponent;
  let fixture: ComponentFixture<ComputerDeleteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerDeleteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerDeleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
