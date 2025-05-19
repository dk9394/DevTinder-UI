import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap } from 'rxjs';

import {
  loginUser,
  addUserFailure,
  addUserSuccess,
  logoutUser,
  removeUserSuccess,
  removeUserFailure,
} from './user.actions';
import { ILoginResponse, ILogoutResponse } from 'src/app/models/auth.model';
import { AuthService } from 'src/app/services/auth.service';
import { AppState } from '../app.state';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private authService: AuthService
  ) {}

  loadUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginUser),
      switchMap((action) => {
        return this.authService.login(action.userCredentials).pipe(
          map((loginResponse: ILoginResponse) => {
            return addUserSuccess({
              data: loginResponse.data,
              message: loginResponse.userMessage,
            });
          }),
          catchError((error) => {
            return of(addUserFailure({ message: error.message }));
          })
        );
      })
    );
  });

  removeUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(logoutUser),
      switchMap((action) => {
        return this.authService.logout().pipe(
          map((logoutResponse: ILogoutResponse) => {
            return removeUserSuccess({ message: logoutResponse.message });
          }),
          catchError((error) => {
            return of(removeUserFailure({ message: error.message }));
          })
        );
      })
    );
  });
}
