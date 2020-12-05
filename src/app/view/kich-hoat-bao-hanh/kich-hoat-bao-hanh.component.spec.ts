import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KichHoatBaoHanhComponent } from './kich-hoat-bao-hanh.component';

describe('KichHoatBaoHanhComponent', () => {
  let component: KichHoatBaoHanhComponent;
  let fixture: ComponentFixture<KichHoatBaoHanhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KichHoatBaoHanhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KichHoatBaoHanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
