import * as _ from 'lodash';
import { createSelector } from 'reselect';

import { ProjectActions, ActionTypes } from '@actions/projects';
import IProject from '@models/project';

export type State = {
  readonly byId: { [id: string]: IProject };
  readonly allIds: string[];
  readonly selectedId: string | null;
};

const initialState: State = {
  byId: {},
  allIds: [],
  selectedId: null,
};

export function reducer(state: State = initialState, action: ProjectActions): State {
  switch (action.type) {
    case ActionTypes.LOAD_SUCCESS: {
      const projects = action.projects;

      const entityById = projects.reduce((entities: { [id: string]: IProject }, project: IProject) => (
        {...entities, ...{
          [project.id]: project
        }}
      ), state.byId);
      const newIds = projects.map(project => project.id);

      return {...state,
        allIds: _.union(state.allIds, newIds),
        byId: entityById
      };
    }

    case ActionTypes.SELECT_PROJECT: {
      const selectedId = action.id;

      return {...state,
        selectedId: selectedId
      };
    }

    case ActionTypes.UNSELECT_PROJECT: {
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
export const getNextProjectId = createSelector(getAllIds, getSelectedId, (ids, selectedId) => {
  if (!selectedId) {
    return null;
  }

  const selectedIndex = ids.indexOf(selectedId);
  const nextIndex = selectedIndex + 1 < ids.length ? selectedIndex + 1 : 0;

  return ids[nextIndex];
});

export const getNextProject = createSelector(getEntities, getNextProjectId, (entities, nextProjectId) => {
  return nextProjectId ? entities[nextProjectId] : null;
});

export const getAll = createSelector(getEntities, getAllIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});
