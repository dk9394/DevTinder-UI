import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  get firstNameField(): AbstractControl {
    return this.registerForm.get('firstName')!;
  }

  get lastNameField(): AbstractControl {
    return this.registerForm.get('lastName')!;
  }

  get emailIdField(): AbstractControl {
    return this.registerForm.get('emailId')!;
  }

  get passwordField(): AbstractControl {
    return this.registerForm.get('password')!;
  }

  get confirmPasswordField(): AbstractControl {
    return this.registerForm.get('confirmPassword')!;
  }

  showFieldError(field: AbstractControl): boolean {
    return (field?.touched || field?.dirty) && !field?.valid;
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        firstName: this.fb.control('Deepak', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ]),
        lastName: this.fb.control('Kumar', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ]),
        emailId: this.fb.control('deepak@gmail.com', [
          Validators.required,
          Validators.email,
        ]),
        password: this.fb.control('Deepak@123', [
          Validators.required,
          Validators.minLength(6),
        ]),
        confirmPassword: this.fb.control(''),
      }
      // {
      //   validators: [
      //     GenericValidators.crossFieldsPasswordValidator(
      //       'password',
      //       'confirmPassword'
      //     ),
      //   ],
      // }
    );
  }

  onSubmit() {
    if (this.registerForm.valid) {
      delete this.registerForm.value.confirmPassword;
      console.log(this.registerForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
