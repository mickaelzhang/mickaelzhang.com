import * as _ from 'lodash';
import { createSelector } from 'reselect';

import { ProjectActions, ProjectActionTypes } from '@actions/projectActions';
import Project from '@models/project';

export type State = {
  readonly byId: { [id: string]: Project };
  readonly allIds: number[];
  readonly selectedId: number | null;
};

const initialState: State = {
  byId: {},
  allIds: [],
  selectedId: null,
};

export function reducer(state: State = initialState, action: ProjectActions): State {
  switch (action.type) {
    case ProjectActionTypes.LOAD_SUCCESS: {
      const projects = action.projects;

      const entityById = projects.reduce((entities: { [id: string]: Project }, project: Project) => ({...entities, ...{
          [project.id]: project
        }}
      ), state.byId);
      const newIds = projects.map(project => project.id);

      return {...state,
        allIds: _.union(state.allIds, newIds),
        byId: entityById
      };
    }

    case ProjectActionTypes.SELECT_PROJECT: {
      const selectedId = action.id;

      return {...state,
        selectedId: selectedId
      };
    }

    case ProjectActionTypes.UNSELECT_PROJECT: {
      return {...state,
        selectedId: null
      };
    }

    default:
      return state;
  }
}

export const getAllIds = (state: State) => state.allIds;
export const getEntities = (state: State) => state.byId;
export const getSelectedId = (state: State) => state.selectedId;

export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
  return selectedId ? entities[selectedId] : null;
});

export const getAll = createSelector(getEntities, getAllIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});
