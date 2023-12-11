import * as selectors from "./projects.selectors";
import { ProjectsState } from "./projects.interfaces";
import { createSlice } from "@reduxjs/toolkit";
import * as extraActions from "../../extra-actions";
import * as sagas from "./projects.sagas";

const initialState: ProjectsState = {
  list: [],
};

export const projectsStore = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(extraActions.getProjects.success, (state, action) => {
      state.list = action.payload.data.projects;
    });
    builder.addCase(extraActions.postProjects.success, (state, action) => {
      state.list = [...state.list, action.payload.data.project];
    });
  },
});

export { selectors, sagas };
