import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlyyeucaubhComponent } from './quanlyyeucaubh.component';

describe('QuanlyyeucaubhComponent', () => {
  let component: QuanlyyeucaubhComponent;
  let fixture: ComponentFixture<QuanlyyeucaubhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanlyyeucaubhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlyyeucaubhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
