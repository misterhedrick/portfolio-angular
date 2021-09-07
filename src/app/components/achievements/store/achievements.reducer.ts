import * as AchievementsActions from './achievements.actions';
import { Achievement } from '../../../models/achievement';

const initialState = {
  achievements: ['my achievement', 'second one'],
};

export function achievementsReducer(
  state = initialState,
  action: AchievementsActions.AddAchievements
) {
  switch (action.type) {
    case AchievementsActions.ADD_ACHIEVEMENTS:
      return {
        ...state,
        achievements: [...state.achievements, action.payload],
      };
    default:
      return state;
  }
}
