import { Directive, effect, input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, ValidationErrors, Validator } from '@angular/forms';
import { ValidatorWithMessage } from '../../utils/src/models';

@Directive()
export abstract class BaseCvaImplementationDirective<T> implements ControlValueAccessor, Validator {
  validators = input<ValidatorWithMessage[]>([]);
  name = input<string>('');
  controlId = input<string>();
  value!: T;
  validationErrors: ValidationErrors | null = null;
  errorMessages: string[] = [];
  isTouched = false;
  isDirty = false;

  disabled = false;
  onChange: (value: T) => void = () => { };
  onTouched: () => void = () => { };
  abstract onInputChange(event: Event): void;
  constructor() {
    effect(() => {
      if (this.value || this.isTouched) {
        this.runValidators();
      }
    })
  }

  writeValue(value: T): void {
    this.value = value;
  }

  registerOnChange(fn: (value: T) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled; 
  }
  
  // Validator implementation
  validate(control: AbstractControl): ValidationErrors | null {
    this.isTouched = control.touched;
    this.isDirty = control.dirty;
    this.runValidators();
    return this.validationErrors;
  }

  protected runValidators(): void {
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

  markAsTouched(): void {
    if (!this.isTouched) {
      this.isTouched = true;
      this.onTouched();
      this.runValidators();
    }
  }

}
