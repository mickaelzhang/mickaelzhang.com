import { combineReducers } from 'redux';

import { projectReducer, ProjectState } from './projectReducer';

interface StoreEnhancerState {}

export interface RootState extends StoreEnhancerState {
  projects: ProjectState;
}

const rootReducer = combineReducers<RootState>({
  projects: projectReducer
});

export default rootReducer;
