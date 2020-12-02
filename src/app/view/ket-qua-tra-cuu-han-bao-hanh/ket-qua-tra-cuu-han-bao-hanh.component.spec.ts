import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KetQuaTraCuuHanBaoHanhComponent } from './ket-qua-tra-cuu-han-bao-hanh.component';

describe('KetQuaTraCuuHanBaoHanhComponent', () => {
  let component: KetQuaTraCuuHanBaoHanhComponent;
  let fixture: ComponentFixture<KetQuaTraCuuHanBaoHanhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KetQuaTraCuuHanBaoHanhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KetQuaTraCuuHanBaoHanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
