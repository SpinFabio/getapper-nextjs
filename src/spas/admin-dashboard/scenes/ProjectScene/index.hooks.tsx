import { useSelector } from "react-redux";
import { selectors } from "../../redux-store";

export const useProjectScene = () => {
  const projectsList = useSelector(selectors.getProjectsList);
  return { projectsList };
};
