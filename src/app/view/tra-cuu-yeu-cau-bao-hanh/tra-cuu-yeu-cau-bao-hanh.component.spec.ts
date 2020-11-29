import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraCuuYeuCauBaoHanhComponent } from './tra-cuu-yeu-cau-bao-hanh.component';

describe('TraCuuYeuCauBaoHanhComponent', () => {
  let component: TraCuuYeuCauBaoHanhComponent;
  let fixture: ComponentFixture<TraCuuYeuCauBaoHanhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraCuuYeuCauBaoHanhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraCuuYeuCauBaoHanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
