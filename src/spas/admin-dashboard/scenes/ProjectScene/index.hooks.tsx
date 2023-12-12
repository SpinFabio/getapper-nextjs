import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "../../redux-store";
import { useEffect } from "react";

export const useProjectScene = () => {
  const projectsList = useSelector(selectors.getProjectsList);

  return { projectsList };
};
