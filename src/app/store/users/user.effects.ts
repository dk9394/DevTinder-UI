import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap } from 'rxjs';

import { AuthService } from 'src/app/services/auth.service';
import { AppState } from '../app.state';
import { addUser, addUserFailure, addUserSuccess } from './user.actions';
import { ILoginResponse } from 'src/app/models/auth.model';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private authService: AuthService
  ) {}

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addUser),
      switchMap((action) => {
        return this.authService.login(action.userCredentials).pipe(
          map((loginResponse: ILoginResponse) => {
            return addUserSuccess({ user: loginResponse.data });
          }),
          catchError((err) => of(addUserFailure({ error: err.message })))
        );
      })
    );
  });
}
