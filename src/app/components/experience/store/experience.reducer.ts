import * as ExperienceActions from './experience.actions';
import { Experience } from 'src/app/models/experience';

export interface State {
  experience: Experience[];
}

const initialState: State = {
  experience: [],
};

export function experienceReducer(
  state = initialState,
  action: ExperienceActions.AddExperience
) {
  switch (action.type) {
    case ExperienceActions.ADD_EXPERIENCE:
      return {
        ...state,
        experience: [...state.experience, ...action.payload],
      };
    default:
      return state;
  }
}
