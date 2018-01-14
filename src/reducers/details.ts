import { DetailsActions, ActionTypes as DetailsActionTypes } from '@actions/details';

export type State = {
  readonly description: string[];
  readonly github: string;
  readonly email: string;
  readonly resume: string;
};

const initialState: State = {
  description: [],
  github: '',
  email: '',
  resume: '',
};

export function reducer(state: State = initialState, action: DetailsActions): State {
  switch (action.type) {
    case DetailsActionTypes.DETAILS_LOAD_SUCCESS: {
      return {
        ...state,
        ...action.details,
      };
    }
    default:
      return state;
  }
}
