import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlanguageComponent } from './viewlanguage.component';

describe('ViewlanguageComponent', () => {
  let component: ViewlanguageComponent;
  let fixture: ComponentFixture<ViewlanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewlanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewlanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
