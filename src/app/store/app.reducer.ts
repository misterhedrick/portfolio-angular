import { ActionReducerMap } from '@ngrx/store';
import * as fromAchievements from '../components/achievements/store/achievements.reducer';

export interface AppState {
  achievements: fromAchievements.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  achievements: fromAchievements.achievementsReducer,
};
