import { ProjectsActions } from '@actions/projects';
import { LayoutsActions, ActionTypes as LayoutActionTypes, PageTransitionStatus } from '@actions/layouts';

export type State = {
  readonly pageTransitionStatus: string;
};

const initialState: State = {
  pageTransitionStatus: PageTransitionStatus.NONE,
};

export function reducer(state: State = initialState, action: ProjectsActions | LayoutsActions): State {
  switch (action.type) {
    case LayoutActionTypes.PAGE_TRANSITION_START: {
      return {
        ...state,
        pageTransitionStatus: PageTransitionStatus.START
      };
    }

    case LayoutActionTypes.PAGE_TRANSITION_PAUSE: {
      return {
        ...state,
        pageTransitionStatus: PageTransitionStatus.MIDDLE
      };
    }

    case LayoutActionTypes.PAGE_TRANSITION_FINISH: {
      return {
        ...state,
        pageTransitionStatus: PageTransitionStatus.END
      };
    }

    case LayoutActionTypes.PAGE_TRANSITION_END: {
      return {
        ...state,
        pageTransitionStatus: PageTransitionStatus.NONE
      };
    }

    default:
      return state;
  }
}

export const getPageTransitionStatus = (state: State) => state.pageTransitionStatus;
