import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YeucaubaohanhComponent } from './yeucaubaohanh.component';

describe('YeucaubaohanhComponent', () => {
  let component: YeucaubaohanhComponent;
  let fixture: ComponentFixture<YeucaubaohanhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YeucaubaohanhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YeucaubaohanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
