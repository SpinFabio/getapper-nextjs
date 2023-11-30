import React, { memo } from "react";
import { AppHead } from "@/components/AppHead";
import { GetServerSidePropsResult, GetServerSidePropsContext } from "next";

type AboutSsrProps = {
  title: string;
};

const AboutSsr = memo(({ title }: AboutSsrProps) => {
  return (
    <>
      <AppHead title="AboutSsr" description="" />
      <h1>{title}</h1>
    </>
  );
});
AboutSsr.displayName = "AboutSsr";

export default AboutSsr;

export async function getServerSideProps({}: GetServerSidePropsContext<{}>): Promise<
  GetServerSidePropsResult<AboutSsrProps>
> {
  return {
    props: {
      title: Math.random().toString(),
    },
  };
}
