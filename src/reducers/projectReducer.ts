import { ProjectActions, ProjectTypeKeys } from "@actions/projectActions";
import Project from '@models/project';

type ProjectState = {
  readonly byId: string[],
  readonly allIds: number[],
};

const initialState: ProjectState = {
  byId: [],
  allIds: []
};

function projectReducer(state: ProjectState = initialState, action: ProjectActions) {
  switch (action.type) {
    case ProjectTypeKeys.LOAD_SUCCESS: {
      const projects = action.projects;
      const projectIds = projects.map(project => project.id);
      const newEntities = projects.reduce((entities: { [id: string]: Project }, project: Project) => {
        return {...entities, ...{
          [project.id]: project
        }};
      }, {} as { [id: string]: Project });

      return {...state,
        allIds: { ...state.allIds, ...projectIds},
        byId: { ...state.byId, ...newEntities}
      };
    }

    default:
      return state;
  }
}

export { projectReducer, ProjectState };