import { Component,  forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PasswordStrengthService } from 'src/app/service/Password-strength.service';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true
    }
  ]
})
export class PasswordInputComponent implements ControlValueAccessor, OnInit{
  passwordStrength: number = 0;

  value: string = '';
  onChange: any = () => {};
  onTouched: any = () => {};

  constructor(private passwordService: PasswordStrengthService) {}

  ngOnInit() {
    this.onUpdatePasswordStrength();
  }

  onUpdatePasswordStrength() {
    this.passwordStrength = this.passwordService.calculateComplexity(this.value);
  }

  writeValue(value: any): void {
    this.value = value;
    this.onChange(this.value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onInput() {
    this.onChange(this.value);
    this.onUpdatePasswordStrength();    
  }

  
}
