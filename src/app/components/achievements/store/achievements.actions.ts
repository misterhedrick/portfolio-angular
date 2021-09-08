import { Action } from '@ngrx/store';
import { Achievement } from 'src/app/models/achievement';

export const GET_ACHIEVEMENTS = 'GET_ACHIEVEMENTS';
export const ADD_ACHIEVEMENTS = 'ADD_ACHIEVEMENTS';

export class GetAchievements implements Action {
  readonly type = GET_ACHIEVEMENTS;
}

export class AddAchievements implements Action {
  readonly type = ADD_ACHIEVEMENTS;

  constructor(public payload: Achievement[]) {}
}
