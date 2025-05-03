import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { cvaProviders } from '../../shared/providers/cva-providers';
import { BaseCvaImplementationDirective } from '../../shared/directives/base-cva-implementation.directive';
import { ValidationMessagesComponent } from 'ngx-custom-controls/src/shared/components/validation-messages/validation-messages.component';

@Component({
  selector: 'ngcc-custom-radio',
  imports: [NgClass, ValidationMessagesComponent],
  standalone: true,
  templateUrl: './custom-radio.component.html',
  providers: [...cvaProviders(CustomRadioComponent)]    
})
export class CustomRadioComponent extends BaseCvaImplementationDirective<string> {
  styleClass = input('form-check-input');
  option = input.required<string>();

}