import { Actions, Effect, ofType } from '@ngrx/effects';
import * as AchievementsActions from './achievements.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Achievement } from 'src/app/models/achievement';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AchievementsEffects {
  @Effect()
  getAchievements = this.actions$.pipe(
    ofType(AchievementsActions.GET_ACHIEVEMENTS),
    switchMap(() => {
      return this.http
        .get<Achievement[]>(environment.API_URL + 'achievements')
        .pipe(
          map((data) => {
            return new AchievementsActions.AddAchievements(data);
          }),
          catchError((error) => {
            return of();
          })
        );
    })
  );
  constructor(private actions$: Actions, private http: HttpClient) {}
}
