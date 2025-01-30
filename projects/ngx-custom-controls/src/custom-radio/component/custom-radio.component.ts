import { Component, input } from '@angular/core';
import { BaseCvaImplementationDirective } from '../../shared/directives/base-cva-implementation.directive';
import { NgClass } from '@angular/common';
import { cvaProviders } from '../../shared/providers/cva-providers';
import { BaseCvaImplementationDirective } from '../../custom-checkbox/base-cva-implementation.directive';

@Component({
  selector: 'ngcc-custom-radio',
  imports: [NgClass],
  templateUrl: './custom-radio.component.html',
  providers: [...cvaProviders(CustomRadioComponent)]    
})
export class CustomRadioComponent extends BaseCvaImplementationDirective<string> {
  styleClass = input('form-check-input');
  option = input.required<string>();

}