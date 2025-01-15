import { ValidatorFn } from "@angular/forms";

export interface ValidatorWithMessage {
    validator: ValidatorFn;
    message: string;
}

export interface IOptions {
    value: string;
    label: string;
}