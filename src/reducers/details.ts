import { DetailsActions, ActionTypes as DetailsActionTypes } from '@actions/details';
import { IDetail } from '@models/detail';

export type State = {
  readonly data: IDetail;
  readonly isLoaded: boolean;
};

const initialState: State = {
  data: {
    description: [],
    github: '',
    email: '',
    resume: '',
  },
  isLoaded: false
};

export function reducer(state: State = initialState, action: DetailsActions): State {
  switch (action.type) {
    case DetailsActionTypes.DETAILS_LOAD_SUCCESS: {
      return { ...state,
        data: { ...state.data,
          ...action.details
        },
        isLoaded: true,
      };
    }
    default:
      return state;
  }
}

export const getIsLoaded = (state: State) => state.isLoaded;
export const getData = (state: State) => state.data;
