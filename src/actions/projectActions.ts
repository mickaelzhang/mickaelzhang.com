import { Action, Dispatch } from 'redux';
import { AxiosResponse } from 'axios';

import { AppState } from '@reducers/index';
import Project from '@models/project';
import ProjectService from '@services/projectService';

export enum ProjectActionTypes {
  LOAD_REQUEST = 'Project | LOAD_REQUEST',
  LOAD_SUCCESS = 'Project | LOAD_SUCCESS',
  LOAD_FAIL = 'Project | LOAD_FAIL',
  SELECT_PROJECT = 'Project | SELECT_PROJECT',
  UNSELECT_PROJECT = 'Project | UNSELECT_PROJECT'
}

export interface LoadProjectListRequestAction extends Action {
  type: ProjectActionTypes.LOAD_REQUEST;
}

export interface LoadProjectListSuccessAction extends Action {
  type: ProjectActionTypes.LOAD_SUCCESS;
  projects: Project[];
}

export interface LoadProjectListFailAction extends Action {
  type: ProjectActionTypes.LOAD_FAIL;
}

export interface SelectProjectAction extends Action {
  type: ProjectActionTypes.SELECT_PROJECT;
  id: number;
}

export interface UnselectProjectAction extends Action {
  type: ProjectActionTypes.UNSELECT_PROJECT;
}

const loadProjectListRequestAction  = () => (
  { type: ProjectActionTypes.LOAD_REQUEST }
);

const loadProjectListFailAction = () => (
  { type: ProjectActionTypes.LOAD_FAIL }
);

const loadProjectListSuccessAction = (projects: Project[]) => ({
  type: ProjectActionTypes.LOAD_SUCCESS,
  projects: projects
});

const selectProjectAction = (id: number) => ({
  type: ProjectActionTypes.SELECT_PROJECT,
  id: id
});

export const unselectProjectAction = () => ({
  type: ProjectActionTypes.UNSELECT_PROJECT
});

export const fetchBySlugAndSelectProject = (slug: string) => {
  return (dispatch: Dispatch<AppState>) => {
    ProjectService.getRessourceBySlug(slug).then((response: AxiosResponse) => {
      if (response.status === 200) {
        dispatch(selectProjectAction(response.data.id as number));
        dispatch(loadProjectListSuccessAction([response.data] as Project[]));
      }
    });
  };
};

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

export type ProjectActions = LoadProjectListRequestAction
  | LoadProjectListSuccessAction
  | LoadProjectListFailAction
  | SelectProjectAction
  | UnselectProjectAction;