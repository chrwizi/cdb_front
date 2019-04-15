import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerCountComponent } from './computer-count.component';

describe('ComputerCountComponent', () => {
  let component: ComputerCountComponent;
  let fixture: ComponentFixture<ComputerCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
