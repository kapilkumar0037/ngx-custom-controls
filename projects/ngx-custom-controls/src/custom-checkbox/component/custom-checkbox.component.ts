import { Component, forwardRef, input, ViewEncapsulation } from '@angular/core';
import { BaseCvaImplementationDirective } from '../../shared/directives/base-cva-implementation.directive';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgClass } from '@angular/common';
import { cvaProviders } from '../../utils/src/providers/cva-providers';


@Component({
  selector: 'ngo-custom-checkbox',
  imports: [NgClass],
  templateUrl: './custom-checkbox.component.html',
  providers: [...cvaProviders(CustomCheckboxComponent)]
})
export class CustomCheckboxComponent extends BaseCvaImplementationDirective<boolean> {
  styleClass = input('form-check-input') ;
  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.value = inputElement.checked;
    this.onChange(this.value);
    this.runValidators();
  }
}
