import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlanguageComponent } from './editlanguage.component';

describe('EditlanguageComponent', () => {
  let component: EditlanguageComponent;
  let fixture: ComponentFixture<EditlanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditlanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditlanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
