import { Component, input } from '@angular/core';
import { BaseCvaImplementationDirective } from '../../shared/directives/base-cva-implementation.directive';
import { NgClass } from '@angular/common';
import { cvaProviders } from '../../shared/providers/cva-providers';

@Component({
  selector: 'ngcc-custom-datepicker',
  imports: [NgClass],
  templateUrl: './custom-datepicker.component.html',
  providers: [...cvaProviders(CustomDatepickerComponent)]
})
export class CustomDatepickerComponent extends BaseCvaImplementationDirective<string> {
  styleClass = input('form-control');
  type = input<string>('date');
  min = input<string>('');
  max = input<string>('');
  ngOnInit() {
    this.value = '';
  }
}
