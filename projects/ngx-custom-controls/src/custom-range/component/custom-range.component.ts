import { Component, input } from '@angular/core';
import { cvaProviders } from '../../shared/providers/cva-providers';
import { BaseCvaImplementationDirective } from '../../shared/directives/base-cva-implementation.directive';
import { ValidationMessagesComponent } from '../../shared/components/validation-messages/validation-messages.component';

@Component({
  selector: 'ngcc-custom-range',
  imports: [ValidationMessagesComponent],
  standalone: true,
  templateUrl: './custom-range.component.html',
  providers: [...cvaProviders(CustomRangeComponent)]  
})
export class CustomRangeComponent extends BaseCvaImplementationDirective<string> {
  styleClass = input('form-range') ;
  min = input<number>(0) ;
  max = input<number>(100) ;
  step = input<number>(1) ;
}
