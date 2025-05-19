import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { FeedsService } from 'src/app/feeds/feeds.service';
import { addFeeds, addFeedsFailure, addFeedsSuccess } from './feed.actions';
import { IFeedsResponse } from 'src/app/models/user.model';

@Injectable()
export class feedEffects {
  constructor(private actions$: Actions, private feedsService: FeedsService) {}

  loadFeeds$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addFeeds),
      switchMap((action) => {
        return this.feedsService.fetchFeeds().pipe(
          map((feedsResponse: IFeedsResponse) => {
            return addFeedsSuccess({
              feeds: feedsResponse.data,
              message: feedsResponse.userMessage,
            });
          }),
          catchError((error) => of(addFeedsFailure({ message: error.message })))
        );
      })
    );
  });
}
