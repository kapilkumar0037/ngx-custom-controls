import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { CustomCheckboxComponent } from '../../../ngx-custom-controls/src/custom-checkbox';
import { CustomDatepickerComponent } from '../../../ngx-custom-controls/src/custom-datepicker';
import { CustomInputComponent } from '../../../ngx-custom-controls/src/custom-input';
import { CustomRadioComponent } from '../../../ngx-custom-controls/src/custom-radio';
import { CustomRangeComponent } from '../../../ngx-custom-controls/src/custom-range';
import { CustomSelectComponent } from '../../../ngx-custom-controls/src/custom-select';
import { IOptions } from '../../../ngx-custom-controls/src/utils/src/models';

@Component({
  selector: 'app-root',
  imports: [ NgClass,
    FormsModule,
    CustomCheckboxComponent,
    CustomInputComponent,
    CustomSelectComponent,
    CustomRadioComponent,
    CustomRangeComponent,
    CustomDatepickerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo-app';
  
  password = '';
  username = 'Testing'
  isChecked: boolean = true;
  email = '';
  phone = '';
  selected = "";
  isChecked1 = false;
  radioOption: IOptions[] = [{ value: '1', label: 'Male' }, { value: '2', label: 'Female' }];
  selectedRadio = "1";
  selectedRangeValue = 3;
  selectedDate = '21-12-2018';
  validators = [
    { validator: Validators.required, message: 'Username is required.' },
    { validator: Validators.minLength(5), message: 'Username must be at least 5 characters long.' },
  ]

  emailValidators = [
    { validator: Validators.required, message: 'Email is required.' },
    { validator: Validators.minLength(5), message: 'Email must be at least 5 characters long.' },
    { validator: Validators.email, message: 'Please enter a valid email.' }
  ]

  phoneValidators = [
    { validator: Validators.required, message: 'Phone number is required.' },
    { validator: Validators.pattern(/^[0-9]{10}$/), message: 'Please enter a valid phone number.' },
  ]
  checkboxValidators = [
    { validator: Validators.requiredTrue, message: 'You must accept the terms and conditions.' },
  ];
  pwdStrengthOutput(output: any) {
    console.log(output);
  }

  selectValidators = [
    { validator: Validators.required, message: 'This is a required field.' }
  ]

  rangeValidators = [
    { validator: this.rangeValidator(1), message: 'Please enter a valid range.' }
  ]

  rangeValidator(min: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      return value > min ? null : { rangeRequired: { minValue: min } };
    };
  }
}
