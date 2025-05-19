import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { IUser } from 'src/app/models/user.model';
import { AppState } from 'src/app/store/app.state';
import { loginUser } from 'src/app/store/users/user.actions';
import { loggedInUser } from 'src/app/store/users/user.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  get emailIdField() {
    return this.loginForm.get('emailId')!;
  }

  get passwordField() {
    return this.loginForm.get('password')!;
  }

  showFieldError(field: AbstractControl): boolean {
    return (field?.touched || field?.dirty) && !field?.valid;
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      emailId: this.fb.control('todd@gmail.com', [
        Validators.required,
        Validators.email,
      ]),
      password: this.fb.control('Todd@123', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
    this.store.select(loggedInUser).subscribe((user: IUser | null) => {
      if (user) {
        this.router.navigate(['../../feeds'], {
          relativeTo: this.route,
        });
      } else {
      }
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.store.dispatch(loginUser({ userCredentials: this.loginForm.value }));
    } else {
      console.log('Form is invalid');
    }
  }
}
