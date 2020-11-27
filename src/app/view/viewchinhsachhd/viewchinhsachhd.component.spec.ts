import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchinhsachhdComponent } from './viewchinhsachhd.component';

describe('ViewchinhsachhdComponent', () => {
  let component: ViewchinhsachhdComponent;
  let fixture: ComponentFixture<ViewchinhsachhdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewchinhsachhdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchinhsachhdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
