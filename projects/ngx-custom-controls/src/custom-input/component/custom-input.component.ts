import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { cvaProviders } from '../../shared/providers/cva-providers';
import { BaseCvaImplementationDirective } from '../../shared/directives/base-cva-implementation.directive';
import { ValidationMessagesComponent } from '../../shared/components/validation-messages/validation-messages.component';

@Component({
  selector: 'ngcc-custom-input',
  imports: [NgClass, ValidationMessagesComponent],
  standalone: true,
  templateUrl: './custom-input.component.html',
  providers: [...cvaProviders(CustomInputComponent)]  
})
export class CustomInputComponent extends BaseCvaImplementationDirective<string> {
  styleClass = input('form-control');
  placeholder = input('Enter');
  type = input('text');
  ngOnInit() {
    this.value = '';
  }
}
