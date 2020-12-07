import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TracuubaohanhComponent } from './tracuubaohanh.component';

describe('TracuubaohanhComponent', () => {
  let component: TracuubaohanhComponent;
  let fixture: ComponentFixture<TracuubaohanhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TracuubaohanhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TracuubaohanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
