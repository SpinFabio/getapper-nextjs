import { useMemo } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  // name: yup.string().required("Error message")
});

type NewProjectFormData = {
  // name: string;
};

export const useNewProjectForm = () => {
  const formData = useForm<NewProjectFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      // name: "",
    },
  });
  const {
    handleSubmit,
    formState: { isValid, isSubmitted },
  } = formData;
  const submitDisabled = isSubmitted && !isValid;

  const triggerSubmit = useMemo(
    () =>
      handleSubmit((data) => {
        // data.name;
      }),
    [handleSubmit],
  );

  return {
    formData,
    triggerSubmit,
    submitDisabled,
  };
};
