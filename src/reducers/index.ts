import { combineReducers } from 'redux';

import { projectReducer, ProjectState } from './projectReducer';

interface StoreEnhancerState {}

export interface AppState extends StoreEnhancerState {
  projects: ProjectState;
}

const rootReducer = combineReducers<AppState>({
  projects: projectReducer
});

export default rootReducer;
