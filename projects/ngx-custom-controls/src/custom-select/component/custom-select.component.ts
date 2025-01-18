import { Component, input } from '@angular/core';
import { BaseCvaImplementationDirective } from '../../shared/directives/base-cva-implementation.directive';
import { NgClass } from '@angular/common';
import { cvaProviders } from '../../shared/providers/cva-providers';

@Component({
  selector: 'ngcc-custom-select',
  imports: [NgClass],
  templateUrl: './custom-select.component.html',
  providers: [...cvaProviders(CustomSelectComponent)]
})
export class CustomSelectComponent extends BaseCvaImplementationDirective<string>{
  styleClass = input('form-select');
}
