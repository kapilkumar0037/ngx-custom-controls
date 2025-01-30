import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { cvaProviders } from '../../shared/providers/cva-providers';
import { BaseCvaImplementationDirective } from '../../shared/directives/base-cva-implementation.directive';


@Component({
  selector: 'ngcc-custom-datepicker',
  imports: [NgClass],
  standalone: true,
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
