# NGX Custom Controls

Angular library which provides a powerful base directive (`BaseCvaImplementationDirective<T>`) that implements both `ControlValueAccessor` and `Validator` interfaces, making it easy to create custom form controls with built-in validation support. Every custom control implemented by extending the base directive will support both template-driven and reactive forms. Library also provides basic control components created using base directive and bootstrap css. 

If you find this library helpful, please consider giving it a ⭐ on [GitHub](https://github.com/kapilkumar0037/ngx-custom-controls)!

## Why Use This Library?

- **Simplified Custom Control Creation**: Create your own form controls by extending the base directive, eliminating the need to implement complex form control interfaces manually
- **Type-Safe**: Fully generic implementation allows you to specify the type of value your control will handle
- **Framework Agnostic**: Works seamlessly with both template-driven and reactive forms
- **Validation Made Easy**: We can use
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
We just need to write all applicable validators and provide it to the control and everything else will be handled by the directive.

## Creating Custom Controls

You can create your own form controls by extending the `BaseCvaImplementationDirective`:

```typescript
import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { BaseCvaImplementationDirective } from 'ngx-custom-controls';

@Component({
  selector: 'app-custom-control',
  template: `
    <input [id]="controlId()" #input [disabled]="disabled" [ngClass]="styleClass()" type="{{type()}}" [value]="value" (input)="onInputChange(input.value)"
    (blur)="markAsTouched()" [attr.placeholder]="placeholder()"/>

    @if(validationErrors && (isTouched || isDirty)) {
        <ngcc-validation-messages [errorMessages]="errorMessages"></ngcc-validation-messages>
        }
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
  styleClass = input('form-control');
  placeholder = input('Enter');
  type = input('text');
  ngOnInit() {
    this.value = '';
  }
}
```
In most cases you need not to write any code in your control it's only when you need to override something.

## Usage in parent component
It's time to use your component now
### Reactive form example
```html
  <form [formGroup]="ageForm">
    <ngcc-custom-input controlId="age" placeholder="21" formControlName="age" [validators]="ageValidators"
      [type]="'number'">
      <label for="age">Age</label>
    </ngcc-custom-input>
  </form>
```
```typescript
ageForm = new FormGroup({
    age: new FormControl(22)
  });
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
```
You se we have just added applicable validators which can also be shared using shared validator class.

This example demonstrates:
- Creating a custom input component supporting dynamic "type", placeholder and css class
- Number type input to create age input box.
- Integration with reactive forms using `formControlName`
- Custom value parsing
- Bootstrap validation styling
- Multiple validators with custom messages

### Template driven form example
```html
  <ngcc-custom-input controlId="tage" placeholder="22" [(ngModel)]="age" [validators]="ageValidators" [type]="'number'">
    <label for="tage">Age</label>
  </ngcc-custom-input>
```
```typescript
age:number;
//Same validators used for reactive form control
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
```

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
