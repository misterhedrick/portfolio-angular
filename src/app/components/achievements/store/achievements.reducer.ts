import * as AchievementsActions from './achievements.actions';
import { Achievement } from '../../../models/achievement';

export interface State {
  achievements: Achievement[];
}

const initialState: State = {
  achievements: [],
};

export function achievementsReducer(
  state = initialState,
  action: AchievementsActions.AddAchievements
) {
  switch (action.type) {
    case AchievementsActions.ADD_ACHIEVEMENTS:
      return {
        ...state,
        achievements: [...state.achievements, ...action.payload],
      };
    default:
      return state;
  }
}
