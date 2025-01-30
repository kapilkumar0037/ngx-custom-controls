import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { cvaProviders } from '../../shared/providers/cva-providers';
import { BaseCvaImplementationDirective } from '../../shared/directives/base-cva-implementation.directive';

@Component({
  selector: 'ngcc-custom-select',
  imports: [NgClass],
  standalone: true,
  templateUrl: './custom-select.component.html',
  providers: [...cvaProviders(CustomSelectComponent)]
})
export class CustomSelectComponent extends BaseCvaImplementationDirective<string> {
  styleClass = input('form-select');
}
