import { Component, forwardRef, input } from '@angular/core';
import { BaseCvaImplementationDirective } from '../../shared/directives/base-cva-implementation.directive';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgClass } from '@angular/common';
import { cvaProviders } from '../../utils/src/providers/cva-providers';

@Component({
  selector: 'ngo-custom-radio',
  imports: [NgClass],
  templateUrl: './custom-radio.component.html',
  providers: [...cvaProviders(CustomRadioComponent)]    
})
export class CustomRadioComponent extends BaseCvaImplementationDirective<string> {
  styleClass = input('form-check-input');
  option = input.required<string>();

  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.value = inputElement.value;
    this.onChange(this.value);
    this.runValidators();
  }
}