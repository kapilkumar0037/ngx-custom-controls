import { Component, input } from '@angular/core';

@Component({
  selector: 'ngcc-validation-messages',
  imports: [],
  templateUrl: './validation-messages.component.html'
})
export class ValidationMessagesComponent {
  errorMessages = input<string[]>([]);
}
