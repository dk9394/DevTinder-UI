import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import {
  addProfile,
  addProfileFailure,
  addProfileSuccess,
} from './profile.actions';
import { ProfileService } from 'src/app/profile/profile.service';
import { IProfileResponse } from 'src/app/models/user.model';

@Injectable()
export class ProfileEffects {
  constructor(
    private actions$: Actions,
    private profileService: ProfileService
  ) {}
  loadProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addProfile),
      switchMap((action) => {
        return this.profileService.fetchProfile().pipe(
          map((profileResponse: IProfileResponse) => {
            return addProfileSuccess({
              data: profileResponse.data,
              message: profileResponse.userMessage,
            });
          }),
          catchError((error) => {
            return of(addProfileFailure({ message: error.message }));
          })
        );
      })
    );
  });
}
