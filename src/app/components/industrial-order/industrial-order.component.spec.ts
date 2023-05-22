import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialOrderComponent } from './industrial-order.component';

describe('IndustrialOrderComponent', () => {
  let component: IndustrialOrderComponent;
  let fixture: ComponentFixture<IndustrialOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndustrialOrderComponent]
    });
    fixture = TestBed.createComponent(IndustrialOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
