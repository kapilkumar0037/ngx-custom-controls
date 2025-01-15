import { Component, effect, input, output, Signal } from '@angular/core';
import { IPSMConfig, IPwdStrengthOutput, IStrengthProperties } from '../models';

@Component({
  selector: 'ngo-password-strength-meter',
  imports: [],
  templateUrl: './password-strength-meter.component.html',
  styleUrl: './password-strength-meter.component.scss',
})
export class PasswordStrengthMeterComponent {
  config = input<IPSMConfig>({ width: '100%', height: '0.5rem', displayStrengthLabel: true }, { alias: 'options' });
  password = input('');
  pwdStrengthOutput = output<IPwdStrengthOutput>();
  strength = 0;
  strengthProperties: IStrengthProperties = { width: "0%", backgroundClass: "danger", label: '' };

  constructor() {
    effect(() => {
      this.checkStrength();
    });
  }

  checkStrength() {
    const isLongEnough = this.password().length >= (this.config().pwdMinLength ?? 8);    
    const hasLower = /[a-z]/.test(this.password());
    const hasUpper = /[A-Z]/.test(this.password());
    const hasNumber = /[0-9]/.test(this.password());
    let hasSpecial = false;
    if(isLongEnough){
      hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(this.password());
    }


    this.strength = [
      hasLower,
      hasUpper,
      hasNumber,
      hasSpecial,
      isLongEnough,
    ].filter(Boolean).length;
    this.getStrengthProperties();
    this.pwdStrengthOutput.emit(
      {
        strengthScore: this.strength,
        hasMinLength: isLongEnough,
        hasNumbers: hasNumber,
        hasSmallcase: hasLower,
        hasSpecialChars: hasSpecial,
        hasUppercase: hasUpper
      })
  }

  getStrengthProperties() {
    switch (this.strength) {
      case 1:
      case 2:
        this.strengthProperties = { width: this.strength * 10 + "%", backgroundClass: "danger", label: 'weak' };
        break;
      case 3:
      case 4:
        this.strengthProperties = { width: this.strength * 15 + "%", backgroundClass: "warning", label: 'Good' };
        break;
      case 5:
        this.strengthProperties = { width: "100%", backgroundClass: "success", label: 'Strong' };
        break;
      default:
        this.strengthProperties = { width: "0%", backgroundClass: "danger", label: '' };
        break;
    }
  }
}
