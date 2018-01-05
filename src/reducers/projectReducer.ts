
type ProjectState = {
  readonly entities: string[],
};

const initialState: ProjectState = {
  entities: []
};

function projectReducer(state: ProjectState = initialState, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}

export { projectReducer, ProjectState };