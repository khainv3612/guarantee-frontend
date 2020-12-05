import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraCuuHanBaoHanhComponent } from './tra-cuu-han-bao-hanh.component';

describe('TraCuuHanBaoHanhComponent', () => {
  let component: TraCuuHanBaoHanhComponent;
  let fixture: ComponentFixture<TraCuuHanBaoHanhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraCuuHanBaoHanhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraCuuHanBaoHanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
