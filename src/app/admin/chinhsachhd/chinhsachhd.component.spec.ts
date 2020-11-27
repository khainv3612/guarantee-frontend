import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinhsachhdComponent } from './chinhsachhd.component';

describe('ChinhsachhdComponent', () => {
  let component: ChinhsachhdComponent;
  let fixture: ComponentFixture<ChinhsachhdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChinhsachhdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChinhsachhdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
