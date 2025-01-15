import { Component, forwardRef, input } from '@angular/core';
import { BaseCvaImplementationDirective } from '../../shared/directives/base-cva-implementation.directive';
import { NgClass } from '@angular/common';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { cvaProviders } from '../../utils/src/providers/cva-providers';

@Component({
  selector: 'ngo-custom-select',
  imports: [NgClass],
  templateUrl: './custom-select.component.html',
  providers: [...cvaProviders(CustomSelectComponent)]
})
export class CustomSelectComponent extends BaseCvaImplementationDirective<string>{
  styleClass = input('form-select');
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
