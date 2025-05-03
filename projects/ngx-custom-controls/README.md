# NGX Custom Controls

A flexible Angular library providing custom form controls that work independently with both template-driven and reactive forms. At its core, the library provides a powerful base directive (`BaseCvaImplementationDirective<T>`) that implements both `ControlValueAccessor` and `Validator` interfaces, making it easy to create custom form controls with built-in validation support.

If you find this library helpful, please consider giving it a ⭐ on [GitHub](https://github.com/kapilkumar0037/ngx-custom-controls)!

## Why Use This Library?

- **Simplified Custom Control Creation**: Create your own form controls by extending the base directive, eliminating the need to implement complex form control interfaces manually
- **Type-Safe**: Fully generic implementation allows you to specify the type of value your control will handle
- **Framework Agnostic**: Works seamlessly with both template-driven and reactive forms
- **Validation Made Easy**: Built-in support for custom validators with human-readable messages
- **DRY Principle**: The base directive handles all the boilerplate code for form integration

## Features

- 🎯 Framework agnostic form controls
- ✅ Built-in validation support with custom messages
- 🔄 Two-way binding support
- 🎨 Customizable styling
- 📦 Lightweight and tree-shakeable
- 🛡️ Written in TypeScript with strict type checking
- 🔧 Extensible base directive for custom controls
- 📝 Built-in form state tracking (touched, dirty, etc.)


## Installation

```bash
npm install ngx-custom-controls
```

## Basic Usage

Import the desired components in your module or standalone component:

```typescript
import { CustomInputComponent } from 'ngx-custom-controls';

@Component({
  // ...
  imports: [CustomInputComponent]
})
```

### Template Usage Example

```typescript
@Component({
  template: `
    <ngcc-custom-input
      name="email"
      controlId="emailField"
      [(ngModel)]="email"
      [validators]="emailValidators">
    </ngcc-custom-input>
  `
})
export class ExampleComponent {
  email = '';
  
  emailValidators = [
    {
      validator: Validators.required,
      message: 'Email is required'
    },
    {
      validator: Validators.email,
      message: 'Please enter a valid email'
    }
  ];
}
```

## Creating Custom Controls

You can create your own form controls by extending the `BaseCvaImplementationDirective`:

```typescript
import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { BaseCvaImplementationDirective } from 'ngx-custom-controls';

@Component({
  selector: 'app-custom-control',
  template: `
    <input
      [value]="value"
      [id]="controlId()"
      [name]="name()"
      [disabled]="disabled"
      (input)="onInputChange($event.target.value)"
      (blur)="markAsTouched()">
    <div *ngIf="errorMessages.length" class="error-messages">
      <span *ngFor="let message of errorMessages">{{message}}</span>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomControlComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CustomControlComponent),
      multi: true
    }
  ]
})
export class CustomControlComponent extends BaseCvaImplementationDirective<string> {
  // Add custom logic here
}
```

## Reactive Forms Example

Here's how to create a custom numeric input control that works with reactive forms:

```typescript
import { Component, forwardRef } from '@angular/core';
import { FormBuilder, FormGroup, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validators } from '@angular/forms';
import { BaseCvaImplementationDirective } from 'ngx-custom-controls';

@Component({
  selector: 'app-numeric-input',
  template: `
    <input
      type="number"
      [formControl]="numericControl"
      [id]="controlId()"
      [name]="name()"
      [disabled]="disabled"
      (input)="onInputChange($event.target.value)"
      (blur)="markAsTouched()"
      [class.is-invalid]="errorMessages.length > 0">
    
    <div *ngIf="errorMessages.length" class="invalid-feedback">
      <div *ngFor="let message of errorMessages">{{ message }}</div>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumericInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => NumericInputComponent),
      multi: true
    }
  ]
})
export class NumericInputComponent extends BaseCvaImplementationDirective<number> {
  // Custom logic for numeric handling
  override onInputChange(value: any): void {
    const numValue = parseFloat(value);
    super.onInputChange(isNaN(numValue) ? null : numValue);
  }
}

// Usage in a parent component:
@Component({
  template: `
    <form [formGroup]="form">
      <app-numeric-input
        formControlName="age"
        controlId="ageInput"
        [validators]="ageValidators">
      </app-numeric-input>
    </form>
  `
})
export class ParentComponent {
  form: FormGroup;
  
  ageValidators = [
    {
      validator: Validators.required,
      message: 'Age is required'
    },
    {
      validator: Validators.min(18),
      message: 'Must be at least 18 years old'
    },
    {
      validator: Validators.max(100),
      message: 'Must be less than 100 years old'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      age: [null]
    });
  }
}
```

This example demonstrates:
- Creating a numeric input control
- Integration with reactive forms using `formControlName`
- Custom value parsing
- Bootstrap validation styling
- Multiple validators with custom messages


## Base Directive Properties

The `BaseCvaImplementationDirective` provides:

### Inputs
- `validators`: Array of `ValidatorWithMessage[]`
- `name`: Control name
- `controlId`: Unique identifier
- `disabled`: Disabled state

### Properties
- `value`: Current control value
- `validationErrors`: Current validation errors
- `errorMessages`: Array of error messages
- `isTouched`: Touch state
- `isDirty`: Dirty state

### Methods
- `onInputChange(value: T)`: Handle value changes
- `markAsTouched()`: Mark control as touched
- `runValidators()`: Execute validation

## Validation

Define validators with custom messages:

```typescript
const validators = [
  {
    validator: Validators.required,
    message: 'This field is required'
  },
  {
    validator: Validators.minLength(3),
    message: 'Minimum length is 3 characters'
  }
];
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.