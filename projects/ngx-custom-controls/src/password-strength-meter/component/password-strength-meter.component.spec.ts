import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IPwdStrengthOutput } from '../models';
import { PasswordStrengthMeterComponent } from './password-strength-meter.component';

describe('PasswordStrengthMeterComponent', () => {
  let component: PasswordStrengthMeterComponent;
  let fixture: ComponentFixture<PasswordStrengthMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordStrengthMeterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordStrengthMeterComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput("password","Test1234");
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('#getStrengthProperties should return correct strength properties', () => {
    component.strength = 3;
    component.getStrengthProperties();
    expect(component.strengthProperties.width).toEqual("45%");
    expect(component.strengthProperties.backgroundClass).toEqual("warning");
    expect(component.strengthProperties.label).toEqual("Good");
  });
  it('#checkStrength should return correct strength output', () => {
    component.checkStrength();
    expect(component.strength).toBe(4);
    component.pwdStrengthOutput.subscribe((output: IPwdStrengthOutput)=>{
      expect(output.hasMinLength).toBeTruthy();
      expect(output.hasNumbers).toBeTruthy();
      expect(output.hasSmallcase).toBeTruthy();
      expect(output.hasUppercase).toBeTruthy();
      expect(output.hasSpecialChars).toBeFalsy();
    })
  });
});
