import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealStateOrderComponent } from './real-state-order.component';

describe('RealStateOrderComponent', () => {
  let component: RealStateOrderComponent;
  let fixture: ComponentFixture<RealStateOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealStateOrderComponent]
    });
    fixture = TestBed.createComponent(RealStateOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
