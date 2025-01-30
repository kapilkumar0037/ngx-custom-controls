import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { cvaProviders } from '../../shared/providers/cva-providers';
import { BaseCvaImplementationDirective } from '../../shared/directives/base-cva-implementation.directive';

@Component({
  selector: 'ngcc-custom-radio',
  imports: [NgClass],
  standalone: true,
  templateUrl: './custom-radio.component.html',
  providers: [...cvaProviders(CustomRadioComponent)]    
})
export class CustomRadioComponent extends BaseCvaImplementationDirective<string> {
  styleClass = input('form-check-input');
  option = input.required<string>();

}