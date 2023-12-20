import { useMemo } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  name: yup.string().required("Name is Required"),
  age: yup.number().required("Age is Required"),
  email: yup
    .string()
    .email("the email isn't valid")
    .required("Please specify an email"),
});

type ContactFormData = {
  name: string;
  age: number;
  email: string;
};

export const useContactForm = () => {
  const formData = useForm<ContactFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: " ",
      email: " ",
    },
  });

  const {
    handleSubmit,
    formState: { isValid, isSubmitted },
  } = formData;

  const submitDisabled = isSubmitted && !isValid;

  const triggerSubmit = useMemo(
    //è la funzione che si occupa della gestione dell' invio dei dati del form
    () =>
      handleSubmit((data) => {
        alert("Data submitted successfully");
        console.log(data.name + " " + data.age + " " + data.email);

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
