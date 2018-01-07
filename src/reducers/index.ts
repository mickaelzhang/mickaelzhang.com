import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import * as fromProjects from './projectsReducer';
import * as fromLayouts from './layoutsReducer';

interface StoreEnhancerState {}

export interface AppState extends StoreEnhancerState {
  projects: fromProjects.State;
  layouts: fromLayouts.State;
}

const rootReducer = combineReducers<AppState>({
  projects: fromProjects.reducer,
  layouts: fromLayouts.reducer,
});

const getProjectsState = (state: AppState) => state.projects;
const getLayoutsState = (state: AppState) => state.layouts;

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them useable, we
 * need to make new selectors that wrap them.
 */

/**
 * Methods for Projects Reducer
 */
export const layouts = {
  getDataIsLoaded: createSelector(getLayoutsState, fromLayouts.getDataIsLoaded),
};

/**
 * Methods for Projects Reducer
 */
export const projects = {
  getAllIds: createSelector(getProjectsState, fromProjects.getAllIds),
  getEntities: createSelector(getProjectsState, fromProjects.getEntities),
  getSelectedId: createSelector(getProjectsState, fromProjects.getSelectedId),
  getSelected: createSelector(getProjectsState, fromProjects.getSelected),
  getNextProject: createSelector(getProjectsState, fromProjects.getNextProject),
  getAll: createSelector(getProjectsState, fromProjects.getAll),
};

export default rootReducer;