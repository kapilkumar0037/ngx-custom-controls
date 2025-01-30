import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { cvaProviders } from '../../shared/providers/cva-providers';
import { BaseCvaImplementationDirective } from '../../shared/directives/base-cva-implementation.directive';

@Component({
  selector: 'ngcc-custom-input',
  imports: [NgClass],
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
