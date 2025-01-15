import { Component, forwardRef, input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseCvaImplementationDirective } from '../../shared/directives/base-cva-implementation.directive';
import { NgClass } from '@angular/common';
import { cvaProviders } from '../../shared/providers/cva-providers';

@Component({
  selector: 'ngo-custom-datepicker',
  imports: [NgClass],
  templateUrl: './custom-datepicker.component.html',
  providers: [...cvaProviders(CustomDatepickerComponent)]
})
export class CustomDatepickerComponent extends BaseCvaImplementationDirective<string> {
  styleClass = input('form-control');
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
