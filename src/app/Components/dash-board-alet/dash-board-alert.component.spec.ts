import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoardAlertComponent } from './dash-board-alert.component';

describe('DashBoardAlertComponent', () => {
  let component: DashBoardAlertComponent;
  let fixture: ComponentFixture<DashBoardAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashBoardAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBoardAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
