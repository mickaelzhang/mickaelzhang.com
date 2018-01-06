import { createSelector } from 'reselect';

import { ProjectActions, ProjectTypeKeys } from '@actions/projectActions';
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
        allIds: projectIds,
        byId: { ...state.byId, ...newEntities}
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
