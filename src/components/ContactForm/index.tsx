import React, { memo } from "react";
import { FormProvider } from "react-hook-form";
import { useContactForm } from "./index.hooks";
import { Button, Stack } from "@mui/material";
import { FormTextField } from "@/components/_form/FormTextField";

type ContactFormProps = {};

export const ContactForm = memo(({}: ContactFormProps) => {
  const { formData, triggerSubmit, submitDisabled } = useContactForm();

  return (
    <FormProvider {...formData}>
      <form onSubmit={triggerSubmit}>
        <Stack spacing={3} sx={{ maxWidth: "480px" }}>
          <FormTextField name={"name"} label={"Name *"} />
          <FormTextField name={"age"} label={"Age *"} type={"number"} />
          <FormTextField name={"email"} label={"Email *"} />

          <Button variant="contained" type="submit" disabled={submitDisabled}>
            Contattaci!!
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
});
ContactForm.displayName = "ContactForm";
