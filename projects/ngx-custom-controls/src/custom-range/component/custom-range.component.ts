import { Component, forwardRef, input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseCvaImplementationDirective } from '../../shared/directives/base-cva-implementation.directive';
import { cvaProviders } from '../../shared/providers/cva-providers';

@Component({
  selector: 'ngo-custom-range',
  imports: [],
  templateUrl: './custom-range.component.html',
  providers: [...cvaProviders(CustomRangeComponent)]  
})
export class CustomRangeComponent extends BaseCvaImplementationDirective<string> {
  styleClass = input('form-range') ;
  min = input<number>(0) ;
  max = input<number>(100) ;
  step = input<number>(1) ;
  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.value = inputElement.value;
    this.onChange(this.value);
    this.runValidators();
  }
}
