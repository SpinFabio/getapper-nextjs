import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "../../redux-store";
import { useEffect } from "react";

export const useProjectScene = () => {
  const dispatch = useDispatch(); // iportiamo da redux-store la funzione dispatch per aggiornare lo store
  const projectsList = useSelector(selectors.getProjectsList);

  useEffect(() => {
    dispatch(actions.getProjects.request({}));
  }, [dispatch]);
  return { projectsList };
};
