import { ProjectActions, ProjectActionTypes } from '@actions/projectActions';

export type State = {
  readonly dataIsLoaded: boolean;
};

const initialState: State = {
  dataIsLoaded: false,
};

export function reducer(state: State = initialState, action: ProjectActions): State {
  switch (action.type) {
    case ProjectActionTypes.LOAD_SUCCESS:
    case ProjectActionTypes.LOAD_FAIL: {
      return {...state,
        dataIsLoaded: true
      };
    }

    default:
      return state;
  }
}

export const getDataIsLoaded = (state: State) => state.dataIsLoaded;
