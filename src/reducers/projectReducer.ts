import { createSelector } from 'reselect';

import { ProjectActions, ProjectTypeKeys } from '@actions/projectActions';
import { AppState } from '@reducers/index';

import Project from '@models/project';

export type ProjectState = {
  readonly byId: { [id: string]: Project };
  readonly allIds: number[];
  readonly selectedId: number | null;
};

const initialState: ProjectState = {
  byId: {},
  allIds: [],
  selectedId: null,
};

export default function projectReducer(state: ProjectState = initialState, action: ProjectActions): ProjectState {
  switch (action.type) {
    case ProjectTypeKeys.LOAD_SUCCESS: {
      const projects = action.projects;
      const projectIds = projects.map(project => project.id);
      const newEntities = projects.reduce((entities: { [id: string]: Project }, project: Project) => {
          return {...entities, ...{
            [project.id]: project
          }};
        }, {} as { [id: string]: Project }
      );

      return {...state,
        allIds: [...state.allIds, ...projectIds],
        byId: { ...state.byId, ...newEntities}
      };
    }

    default:
      return state;
  }
}

const getProjectReducer = (state: AppState): ProjectState => state.projects;

export const getAllIds = createSelector(getProjectReducer, (state: ProjectState) => state.allIds);
export const getEntities = createSelector(getProjectReducer, (state: ProjectState) => state.byId);
export const getSelectedId = createSelector(getProjectReducer, (state: ProjectState) => state.selectedId);

export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
  return selectedId ? entities[selectedId] : null;
});

export const getAll = createSelector(getEntities, getAllIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});
