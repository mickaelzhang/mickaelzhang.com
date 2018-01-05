import { Action, Dispatch } from 'redux';
import { AxiosResponse } from 'axios';

import { AppState } from '@reducers/index';
import Project from '@models/project';
import ProjectService from '@services/projectService';

export enum ProjectTypeKeys {
  LOAD_REQUEST = 'Project | LOAD_REQUEST',
  LOAD_SUCCESS = 'Project | LOAD_SUCCESS',
  LOAD_FAIL    = 'Project | LOAD_FAIL'
}

export interface LoadProjectListRequestAction extends Action {
  type: ProjectTypeKeys.LOAD_REQUEST;
}

export const loadProjectListRequestAction = () => (
  { type: ProjectTypeKeys.LOAD_REQUEST }
);

export interface LoadProjectListSuccessAction extends Action {
  type: ProjectTypeKeys.LOAD_SUCCESS;
  projects: Project[];
}

export const loadProjectListSuccessAction = (projects: Project[]) => ({
  type: ProjectTypeKeys.LOAD_SUCCESS,
  projects: projects
});

export interface LoadProjectListFailAction extends Action {
  type: ProjectTypeKeys.LOAD_FAIL;
}

export const loadProjectListFailAction = () => (
  { type: ProjectTypeKeys.LOAD_FAIL }
);

export const fetchProjectList = () => {
  return (dispatch: Dispatch<AppState>) => {
    dispatch(loadProjectListRequestAction());

    ProjectService.getRessources().then((response: AxiosResponse) => {
      if (response.status === 200) {
        dispatch(loadProjectListSuccessAction(response.data as Project[]));
      } else {
        dispatch(loadProjectListFailAction());
      }
    });
  };
};

export type ProjectActions = LoadProjectListRequestAction | LoadProjectListSuccessAction | LoadProjectListFailAction;