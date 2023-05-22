import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenceAreaComponent } from './licence-area.component';

describe('LicenceAreaComponent', () => {
  let component: LicenceAreaComponent;
  let fixture: ComponentFixture<LicenceAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LicenceAreaComponent]
    });
    fixture = TestBed.createComponent(LicenceAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
