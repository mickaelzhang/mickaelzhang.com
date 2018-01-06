import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import * as fromProjects from './projectsReducer';

interface StoreEnhancerState {}

export interface AppState extends StoreEnhancerState {
  projects: fromProjects.State;
}

const rootReducer = combineReducers<AppState>({
  projects: fromProjects.reducer
});

const getProjectState = (state: AppState) => state.projects;

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them useable, we
 * need to make new selectors that wrap them.
 */

/**
 * Methods for Projects Reducer
 */
export const projects = {
  getAllIds: createSelector(getProjectState, fromProjects.getAllIds),
  getEntities: createSelector(getProjectState, fromProjects.getEntities),
  getSelectedId: createSelector(getProjectState, fromProjects.getSelectedId),
  getSelected: createSelector(getProjectState, fromProjects.getSelected),
  getAll: createSelector(getProjectState, fromProjects.getAll),
};

export default rootReducer;