import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { cvaProviders } from '../../shared/providers/cva-providers';
import { BaseCvaImplementationDirective } from '../../shared/directives/base-cva-implementation.directive';
import { ValidationMessagesComponent } from 'ngx-custom-controls/src/shared/components/validation-messages/validation-messages.component';

@Component({
  selector: 'ngcc-custom-checkbox',
  imports: [NgClass, ValidationMessagesComponent],
  standalone: true,
  templateUrl: './custom-checkbox.component.html',
  providers: [...cvaProviders(CustomCheckboxComponent)]
})
export class CustomCheckboxComponent extends BaseCvaImplementationDirective<boolean> {
  styleClass = input('form-check-input') ;
}
