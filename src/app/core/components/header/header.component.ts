import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';

import { IUser } from 'src/app/models/user.model';
import { AppState } from 'src/app/store/app.state';
import { logoutUser } from 'src/app/store/users/user.actions';
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
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.currentUser$ = this.store.select(loggedInUser);
    this.currentUser$.subscribe(
      (user: IUser | null) => {
        if (user) {
          this.currentUser = user;
          this.isLoggedIn = !!this.currentUser;
        } else {
          this.isLoggedIn = false;
          this.router.navigate(['../'], { relativeTo: this.route });
        }
      },
      (err) => {
        this.currentUser = null;
        this.isLoggedIn = false;
      }
    );
  }

  onLogout(): void {
    this.store.dispatch(logoutUser());
  }
}
