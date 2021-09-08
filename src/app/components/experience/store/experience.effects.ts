import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Experience } from 'src/app/models/experience';
import * as ExperienceActions from './experience.actions';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ExperienceEffects {
  @Effect()
  getExperience = this.actions$.pipe(
    ofType(ExperienceActions.GET_EXPERIENCE),
    switchMap(() => {
      return this.http
        .get<Experience[]>(environment.API_URL + 'experiences')
        .pipe(
          map((data) => {
            return new ExperienceActions.AddExperience(data);
          }),
          catchError((error) => {
            return of();
          })
        );
    })
  );
  constructor(private actions$: Actions, private http: HttpClient) {}
}
