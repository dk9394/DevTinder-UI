import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AuthService } from 'src/app/services/auth.service';
import { addUser } from 'src/app/store/users/user.actions';
import { UserState } from 'src/app/store/users/user.reducers';
import { loggedInUser } from 'src/app/store/users/user.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private store: Store<UserState>,
    private fb: FormBuilder,
    // private apiService: ApiService,
    // private userService: UserService,
    // private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
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
    this.store.select(loggedInUser).subscribe((data) => {
      // console.log('Data from store: ', data);
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.store.dispatch(addUser({ userCredentials: this.loginForm.value }));
      // .subscribe(
      //   (response: any) => {
      //     console.log('Login response: ', response);
      //     // const user = new User(response.data);
      //     // this.userService.setCurrentUser(user);
      //     // this.apiService.setTokenAndExpiry(response.expiresAt);
      //     // this.router.navigate(['../../feeds'], {
      //     //   relativeTo: this.route,
      //     // });
      //   },
      //   (err) => {
      //     console.log(err);
      //   }
      // );
    } else {
      console.log('Form is invalid');
    }
  }
}
