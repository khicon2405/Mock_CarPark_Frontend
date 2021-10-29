import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllParkingLotComponent } from './all-parking-lot.component';

describe('AllParkingLotComponent', () => {
  let component: AllParkingLotComponent;
  let fixture: ComponentFixture<AllParkingLotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllParkingLotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllParkingLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
