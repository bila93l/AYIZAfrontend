import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewaddressComponent } from './viewaddress.component';

describe('ViewaddressComponent', () => {
  let component: ViewaddressComponent;
  let fixture: ComponentFixture<ViewaddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewaddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
