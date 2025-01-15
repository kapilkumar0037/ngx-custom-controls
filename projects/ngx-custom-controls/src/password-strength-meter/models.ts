export interface IPSMConfig {
    width?: string;
    height?: string;
    displayStrengthLabel?: boolean;  
    pwdMinLength?: number;  
}

export interface IStrengthProperties {
    label?: string;
    backgroundClass?: string;
    width?: string;
}

export interface IPwdStrengthOutput { 
    strengthScore: number;
    hasSmallcase: boolean;
    hasUppercase: boolean;
    hasSpecialChars: boolean;
    hasMinLength: boolean;
    hasNumbers: boolean;
}