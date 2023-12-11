export interface ProjectsState {
  list: {
    name: string;
  }[];
}

export interface AddNewProjectAction {
  payload: {
    name: string;
  };
}
