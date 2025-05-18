import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, map, Observable, tap, throwError } from 'rxjs';

import { IUser } from 'src/app/models/user.model';
import { UserState } from 'src/app/store/users/user.reducers';
import { loggedInUser } from 'src/app/store/users/user.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentUser$?: Observable<IUser | null>;
  currentUser: IUser | null = null;
  isLoggedIn = false;

  constructor(
    private store: Store<UserState>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.currentUser$ = this.store.select(loggedInUser).pipe(
      map((userData: any) => userData.user),
      tap((user) => {
        console.log(user);
      }),
      catchError((err) => throwError(err))
    );
    this.currentUser$.subscribe(
      (user: any) => {
        this.currentUser = user;
        this.isLoggedIn = !!this.currentUser;
      },
      (err) => {
        this.currentUser = null;
        this.isLoggedIn = false;
      }
    );
  }

  onLogout(): void {
    // this.authService.logout().subscribe({
    //   next: (res) => {
    //     this.userService.clearCurrentUser();
    //     this.isLoggedIn = false;
    //     this.apiService.clearToken();
    //     this.router.navigate(['../'], { relativeTo: this.route });
    //   },
    // });
  }
}
