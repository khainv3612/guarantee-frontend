import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageStationComponent } from './manage-station.component';

describe('ManageStationComponent', () => {
  let component: ManageStationComponent;
  let fixture: ComponentFixture<ManageStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
