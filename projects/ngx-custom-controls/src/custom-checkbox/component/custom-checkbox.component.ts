import { Component, input } from '@angular/core';
import { BaseCvaImplementationDirective } from '../../shared/directives/base-cva-implementation.directive';
import { NgClass } from '@angular/common';
import { cvaProviders } from '../../shared';

@Component({
  selector: 'ngo-custom-checkbox',
  imports: [NgClass],
  templateUrl: './custom-checkbox.component.html',
  providers: [...cvaProviders(CustomCheckboxComponent)]
})
export class CustomCheckboxComponent extends BaseCvaImplementationDirective<boolean> {
  styleClass = input('form-check-input') ;

}
