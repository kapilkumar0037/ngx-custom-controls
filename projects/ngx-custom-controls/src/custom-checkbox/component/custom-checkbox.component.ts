import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { cvaProviders } from '../../shared/providers/cva-providers';
import { BaseCvaImplementationDirective } from '../../shared/directives/base-cva-implementation.directive';

@Component({
  selector: 'ngcc-custom-checkbox',
  imports: [NgClass],
  standalone: true,
  templateUrl: './custom-checkbox.component.html',
  providers: [...cvaProviders(CustomCheckboxComponent)]
})
export class CustomCheckboxComponent extends BaseCvaImplementationDirective<boolean> {
  styleClass = input('form-check-input') ;
}
