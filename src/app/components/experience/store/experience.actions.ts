import { Action } from '@ngrx/store';
import { Experience } from 'src/app/models/experience';

export const GET_EXPERIENCE = 'GET_EXPERIENCE';
export const ADD_EXPERIENCE = 'ADD_EXPERIENCE';

export class GetExperience implements Action {
  readonly type = GET_EXPERIENCE;
}

export class AddExperience implements Action {
  readonly type = ADD_EXPERIENCE;

  constructor(public payload: Experience[]) {}
}
