import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "../../redux-store";
import { useEffect } from "react";

export const useProjectScene = () => {
  const dispatch = useDispatch();
  const projectsList = useSelector(selectors.getProjectsList);
  const getProjectsNumberOfProjects = projectsList.length;

  useEffect(() => {
    dispatch(actions.getProjects.request({}));
  }, [dispatch]);

  return { projectsList, getProjectsNumberOfProjects };
};
