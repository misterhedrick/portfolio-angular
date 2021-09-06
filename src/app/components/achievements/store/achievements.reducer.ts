import { Action } from '@ngrx/store';
import { Achievement } from 'src/app/models/achievement';
import { GET_ACHIEVEMENTS } from './achievements.actions';

const initialState = {
  myAchievements: [],
};

export function achievementsReducer(state = initialState, action: Action) {
  switch (action.type) {
    case GET_ACHIEVEMENTS:
      return {
        ...state,
        myAchievements: [...state.myAchievements, action],
      };
  }
}
