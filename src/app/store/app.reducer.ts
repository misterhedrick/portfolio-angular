import { ActionReducerMap } from '@ngrx/store';
import * as fromAchievements from '../components/achievements/store/achievements.reducer';
import * as fromExperience from '../components/experience/store/experience.reducer';

export interface AppState {
  achievements: fromAchievements.State;
  experience: fromExperience.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  achievements: fromAchievements.achievementsReducer,
  experience: fromExperience.experienceReducer,
};
