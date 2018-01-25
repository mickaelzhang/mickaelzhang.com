import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import * as fromProjects from './projects';
import * as fromLayouts from './layouts';
import * as fromDetails from './details';

interface StoreEnhancerState {}

export interface AppState extends StoreEnhancerState {
  projects: fromProjects.State;
  layouts: fromLayouts.State;
  details: fromDetails.State;
}

const rootReducer = combineReducers<AppState>({
  projects: fromProjects.reducer,
  layouts: fromLayouts.reducer,
  details: fromDetails.reducer,
});

export const getProjectsState = (state: AppState) => state.projects;
export const getLayoutsState = (state: AppState) => state.layouts;
export const getDetailsState = (state: AppState) => state.details;

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them useable, we
 * need to make new selectors that wrap them.
 */

/**
 * Methods for Projects Reducer
 */
export const layouts = {
  getPageTransitionStatus: createSelector(getLayoutsState, fromLayouts.getPageTransitionStatus),
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
  getIsLoaded: createSelector(getProjectsState, fromProjects.getIsLoaded),
};

/**
 * Methods for Details Reducer
 */
export const details = {
  getData: createSelector(getDetailsState, fromDetails.getData),
  getIsLoaded: createSelector(getDetailsState, fromDetails.getIsLoaded),
};

export const getDataIsLoaded = createSelector(
  [projects.getIsLoaded, details.getIsLoaded],
  (projectsAreLoaded: boolean, detailsAreLoaded: boolean) => projectsAreLoaded && detailsAreLoaded
);

export default rootReducer;