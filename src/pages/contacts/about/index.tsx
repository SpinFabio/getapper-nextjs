import React, { memo } from "react";
import { AppHead } from "@/components/AppHead";
import { GetStaticPropsResult, GetStaticPropsContext } from "next";

type AboutProps = {
  title: string;
};

const About = memo(({ title }: AboutProps) => {
  return (
    <>
      <AppHead title="About" description="" />
      <h1> about page </h1>
      <h1>{title}</h1>
    </>
  );
});
About.displayName = "About";

export default About;

export async function getStaticProps({}: GetStaticPropsContext<{}>): Promise<
  GetStaticPropsResult<AboutProps>
> {
  // questa funzione viene eseguita lato server (e quindi non nel browser del client)
  // qui possiamo chiamare funzioni che verranno eseguite prima della chiamata di questo componente
  // è codice che viene

  return {
    props: {
      title: Math.random().toString(),
    },
    revalidate: 5,
  };
}
