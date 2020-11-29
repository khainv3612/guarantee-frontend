import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YeuCauBaoHanhComponent } from './yeu-cau-bao-hanh.component';

describe('YeuCauBaoHanhComponent', () => {
  let component: YeuCauBaoHanhComponent;
  let fixture: ComponentFixture<YeuCauBaoHanhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YeuCauBaoHanhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YeuCauBaoHanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
