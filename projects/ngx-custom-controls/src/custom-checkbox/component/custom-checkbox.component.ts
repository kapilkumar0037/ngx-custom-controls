import { Component, input } from '@angular/core';
import { BaseCvaImplementationDirective } from '../../shared/directives/base-cva-implementation.directive';
import { NgClass } from '@angular/common';
import { cvaProviders } from '../../shared';

@Component({
  selector: 'ngcc-custom-checkbox',
  imports: [NgClass],
  templateUrl: './custom-checkbox.component.html',
  providers: [...cvaProviders(CustomCheckboxComponent)]
})
export class CustomCheckboxComponent extends BaseCvaImplementationDirective<boolean> {
  styleClass = input('form-check-input') ;
  override onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.value = inputElement.checked;
    this.onChange(this.value);
    this.runValidators();
  }
}
