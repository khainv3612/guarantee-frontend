import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TramBaoHanhComponent } from './tram-bao-hanh.component';

describe('TramBaoHanhComponent', () => {
  let component: TramBaoHanhComponent;
  let fixture: ComponentFixture<TramBaoHanhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TramBaoHanhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TramBaoHanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
