import { Action } from 'redux';

export enum ActionTypes {
  PAGE_TRANSITION_START = 'Layouts | PAGE_TRANSITION_START',
  PAGE_TRANSITION_PAUSE = 'Layouts | PAGE_TRANSITION_PAUSE',
  PAGE_TRANSITION_FINISH = 'Layouts | PAGE_TRANSITION_FINISH',
  PAGE_TRANSITION_END = 'Layouts | PAGE_TRANSITION_END',
}

export enum PageTransitionStatus {
  START = 'start',
  MIDDLE = 'pause',
  END = 'end',
  NONE = 'none',
}

export interface StartPageTransitionAction extends Action {
  type: ActionTypes.PAGE_TRANSITION_START;
}

export interface PausePageTransitionAction extends Action {
  type: ActionTypes.PAGE_TRANSITION_PAUSE;
}

export interface EndPageTransitionAction extends Action {
  type: ActionTypes.PAGE_TRANSITION_END;
}

export interface FinishPageTransitionAction extends Action {
  type: ActionTypes.PAGE_TRANSITION_FINISH;
}

export const startPageTransitionAction = () => (
  { type: ActionTypes.PAGE_TRANSITION_START }
);

export const pausePageTransitionAction = () => (
  { type: ActionTypes.PAGE_TRANSITION_PAUSE }
);

export const finishPageTransitionAction = () => (
  { type: ActionTypes.PAGE_TRANSITION_FINISH }
);

export const endPageTransitionAction = () => (
  { type: ActionTypes.PAGE_TRANSITION_END }
);

export type LayoutsActions = StartPageTransitionAction
  | PausePageTransitionAction
  | FinishPageTransitionAction
  | EndPageTransitionAction;