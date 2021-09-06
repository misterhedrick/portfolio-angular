import { Action } from '@ngrx/store';

export const GET_ACHIEVEMENTS = 'GET_ACHIEVEMENTS';

export class GetAchievements implements Action {
  type = GET_ACHIEVEMENTS;
}
