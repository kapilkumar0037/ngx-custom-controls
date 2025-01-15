import { Component, effect, forwardRef, input, SimpleChanges } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

interface ValidatorWithMessage {
  validator: ValidatorFn;
  message: string;
}

@Component({
  selector: 'ngo-username',
  imports: [],
  templateUrl: './username.component.html',
  styleUrl: './username.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UsernameComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => UsernameComponent),
      multi: true,
    },
  ],
})
export class UsernameComponent implements ControlValueAccessor, Validator {
  validators = input<ValidatorWithMessage[]>([]);
  placeholder = input<string>('Enter username');

  value = '';
  validationErrors: ValidationErrors | null = null;
  errorMessages: string[] = [];
  isTouched = false;
  onChange: (value: string) => void = () => { };
  onTouched: () => void = () => { };
  constructor() {
    effect(() => {
      if (this.value || this.isTouched) {
        this.runValidators();
      }
    })
  }

  // Implement ControlValueAccessor's writeValue method
  writeValue(value: string): void {
    this.value = value || '';
  }

  // Implement ControlValueAccessor's registerOnChange method
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  // Implement ControlValueAccessor's registerOnTouched method
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Validator implementation
  validate(control: AbstractControl): ValidationErrors | null {
    if (control.dirty || control.touched) {
      this.runValidators();
    }
    return this.validationErrors;
  }

  // Handle input change and validation
  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.value = inputElement.value;
    this.onChange(this.value);
    this.runValidators();
  }

  private runValidators(): void {
    this.validationErrors = null;
    this.errorMessages = [];

    this.validators().forEach((validatorWithMessage) => {
      const error = validatorWithMessage.validator({ value: this.value } as AbstractControl);
      if (error) {
        this.validationErrors = { ...this.validationErrors, ...error };
        this.errorMessages.push(validatorWithMessage.message);
      }
    });
  }
}
