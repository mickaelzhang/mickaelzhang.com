import { Action, Dispatch } from 'redux';
import { AxiosResponse } from 'axios';

import { AppState } from '@reducers/index';
import IProject from '@models/project';
import ProjectService from '@services/projectService';

export enum ActionTypes {
  LOAD_REQUEST = 'Projects | LOAD_REQUEST',
  LOAD_SUCCESS = 'Projects | LOAD_SUCCESS',
  LOAD_FAIL = 'Projects | LOAD_FAIL',
  SELECT_PROJECT = 'Projects | SELECT_PROJECT',
  UNSELECT_PROJECT = 'Projects | UNSELECT_PROJECT'
}

export interface LoadProjectListRequestAction extends Action {
  type: ActionTypes.LOAD_REQUEST;
}

export interface LoadProjectListSuccessAction extends Action {
  type: ActionTypes.LOAD_SUCCESS;
  projects: IProject[];
}

export interface LoadProjectListFailAction extends Action {
  type: ActionTypes.LOAD_FAIL;
}

export interface SelectProjectAction extends Action {
  type: ActionTypes.SELECT_PROJECT;
  id: string;
}

export interface UnselectProjectAction extends Action {
  type: ActionTypes.UNSELECT_PROJECT;
}

const loadProjectListRequestAction = () => (
  { type: ActionTypes.LOAD_REQUEST }
);

const loadProjectListFailAction = () => (
  { type: ActionTypes.LOAD_FAIL }
);

const loadProjectListSuccessAction = (projects: IProject[]) => ({
  type: ActionTypes.LOAD_SUCCESS,
  projects: projects
});

export const selectProjectAction = (id: string) => ({
  type: ActionTypes.SELECT_PROJECT,
  id: id
});

export const unselectProjectAction = () => ({
  type: ActionTypes.UNSELECT_PROJECT
});

export const fetchProjectList = () => {
  return (dispatch: Dispatch<AppState>) => {
    dispatch(loadProjectListRequestAction());

    ProjectService.getRessources().then((response: AxiosResponse) => {
      if (response.status === 200) {
        dispatch(loadProjectListSuccessAction(response.data as IProject[]));
      } else {
        dispatch(loadProjectListFailAction());
      }
    });
  };
};

export type ProjectsActions = LoadProjectListRequestAction
  | LoadProjectListSuccessAction
  | LoadProjectListFailAction
  | SelectProjectAction
  | UnselectProjectAction;