import { createSlice } from "@reduxjs/toolkit";
import * as selectors from "./projects.selectors";
import { AddNewProjectAction, ProjectsState } from "./projects.interfaces";
import * as sagas from "./projects.sagas";

const initialState: ProjectsState = {
  list: [],
};

export const projectsStore = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addNewProject: (state, action: AddNewProjectAction) => {
      state.list = [...(state.list ?? []), action.payload];
    },
  },
});

export { selectors, sagas };
