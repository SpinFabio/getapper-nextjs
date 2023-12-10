import React, { memo } from "react";
import { FormProvider } from "react-hook-form";
import { useNewProjectForm } from "./index.hooks";
import { Button, Stack } from "@mui/material";

type NewProjectFormProps = {};

export const NewProjectForm = memo(({}: NewProjectFormProps) => {
  const { formData, triggerSubmit, submitDisabled } = useNewProjectForm();

  return (
    <FormProvider {...formData}>
      <form onSubmit={triggerSubmit}>
        <Stack spacing={3}>
          <Button variant="contained" type="submit" disabled={submitDisabled}>
            Salva
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
});
NewProjectForm.displayName = "NewProjectForm";
