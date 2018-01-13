import { Action, Dispatch } from 'redux';
import { AxiosResponse } from 'axios';

import { AppState } from '@reducers/index';
import { State as DetailState } from '@reducers/details';
import DetailService from '@services/detailService';

export enum ActionTypes {
  DETAILS_LOAD_REQUEST = 'Details | LOAD_REQUEST',
  DETAILS_LOAD_SUCCESS = 'Details | LOAD_SUCCESS',
  DETAILS_LOAD_FAIL = 'Details | LOAD_FAIL',
}

export interface DetailsLoadRequestAction extends Action {
  type: ActionTypes.DETAILS_LOAD_REQUEST;
}

export interface DetailsLoadSuccessAction extends Action {
  type: ActionTypes.DETAILS_LOAD_SUCCESS;
  details: DetailState;
}

export interface DetailsLoadFailAction extends Action {
  type: ActionTypes.DETAILS_LOAD_FAIL;
}

export const detailsLoadRequestAction = () => (
  { type: ActionTypes.DETAILS_LOAD_REQUEST }
);

export const detailsLoadSuccessAction = (details: DetailState) => (
  { type: ActionTypes.DETAILS_LOAD_SUCCESS, details: details }
);

export const detailsLoadFailAction = () => (
  { type: ActionTypes.DETAILS_LOAD_FAIL }
);

export const fetchPersonalDetail = () => {
  return (dispatch: Dispatch<AppState>) => {
    dispatch(detailsLoadRequestAction());

    DetailService.getInfo().then((response: AxiosResponse) => {
      if (response.status === 200) {
        dispatch(detailsLoadSuccessAction(response.data as DetailState));
      } else {
        dispatch(detailsLoadFailAction());
      }
    });
  };
};

export type DetailsActions = DetailsLoadRequestAction
  | DetailsLoadSuccessAction
  | DetailsLoadFailAction;