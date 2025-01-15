import { Component, forwardRef, input } from '@angular/core';
import { BaseCvaImplementationDirective } from '../../shared/directives/base-cva-implementation.directive';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgClass } from '@angular/common';
import { cvaProviders } from '../../utils/src/providers/cva-providers';

@Component({
  selector: 'ngo-custom-input',
  imports: [NgClass],
  templateUrl: './custom-input.component.html',
  providers: [...cvaProviders(CustomInputComponent)]  
})
export class CustomInputComponent extends BaseCvaImplementationDirective<string> {
  styleClass = input('form-control');
  placeholder = input('Enter');
  type = input('text');
  ngOnInit() {
    this.value = '';
  }

  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.value = inputElement.value;
    this.onChange(this.value);
    this.runValidators();
  }
}
