import React, { memo } from "react";
import { AppHead } from "@/components/AppHead";
import { ContactForm } from "@/components/ContactForm";
import { Box } from "@mui/material";

type ContactUsProps = {};

const ContactUs = memo(({}: ContactUsProps) => {
  return (
    <>
      <AppHead title="ContactUs" description="" />
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          p: "20px",
        }}
      >
        <ContactForm />
      </Box>
    </>
  );
});
ContactUs.displayName = "ContactUs";

export default ContactUs;
