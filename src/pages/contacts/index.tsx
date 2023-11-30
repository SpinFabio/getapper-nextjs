import React, { memo } from "react";
import { AppHead } from "@/components/AppHead";
import { GetStaticPropsResult, GetStaticPropsContext } from "next";

type ContactsProps = {};

const Contacts = memo(({}: ContactsProps) => {
  return (
    <>
      <AppHead title="Contacts" description="hi" />
      <h1>Ciao a tutto il mondo</h1>
    </>
  );
});
Contacts.displayName = "Contacts";

export default Contacts;

export async function getStaticProps({}: GetStaticPropsContext<{}>): Promise<
  GetStaticPropsResult<ContactsProps>
> {
  return {
    props: {},
  };
}
