import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './store/app.state';
import { loadUserOnAppLoad } from './store/users/user.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadUserOnAppLoad());
    this.authService.isAuthorizedUser.subscribe((authorized) => {
      if (authorized) {
        this.router.navigate(['/feeds'], { relativeTo: this.route });
      }
    });
  }
}
