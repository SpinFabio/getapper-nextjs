import { useMemo } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { actions } from "@/spas/admin-dashboard/redux-store";

const schema = yup.object({
  name: yup.string().min(3).max(200).required("Specificare un nome"),
});

type NewProjectFormData = {
  name: string;
};

export const useNewProjectForm = () => {
  const dispatch = useDispatch();
  const formData = useForm<NewProjectFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: " ",
    },
  });
  const {
    handleSubmit,
    reset,
    formState: { isValid, isSubmitted },
  } = formData;
  const submitDisabled = isSubmitted && !isValid;

  const triggerSubmit = useMemo(
    () =>
      handleSubmit((data) => {
        // dispatch(actions.addNewProject(data))
        dispatch(actions.postProjects.request(data));
        reset({ name: "" });
      }),
    [handleSubmit, dispatch, reset],
  );

  return {
    formData,
    triggerSubmit,
    submitDisabled,
  };
};
