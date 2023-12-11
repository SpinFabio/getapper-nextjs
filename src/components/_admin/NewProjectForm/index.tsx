import React, { memo } from "react";
import { FormProvider } from "react-hook-form";
import { useNewProjectForm } from "./index.hooks";
import { Button, Stack } from "@mui/material";
import { FormTextField } from "@/components/_form/FormTextField";

type NewProjectFormProps = {};

export const NewProjectForm = memo(({}: NewProjectFormProps) => {
  const { formData, triggerSubmit, submitDisabled } = useNewProjectForm();

  return (
    <FormProvider {...formData}>
      <form onSubmit={triggerSubmit}>
        <Stack spacing={1} sx={{ maxWidth: "480px" }}>
          <FormTextField name={"name"} label={"Nome del Progetto"} />
          <Button type={"submit"}>Salva</Button>
        </Stack>
      </form>
    </FormProvider>
  );
});
NewProjectForm.displayName = "NewProjectForm";
