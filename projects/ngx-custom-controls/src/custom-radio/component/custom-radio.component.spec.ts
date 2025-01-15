import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRadioComponent } from './custom-radio.component';

describe('CustomRadioGroupComponent', () => {
  let component: CustomRadioComponent;
  let fixture: ComponentFixture<CustomRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomRadioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
