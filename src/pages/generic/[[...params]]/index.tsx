import React, { memo } from "react";
import { AppHead } from "@/components/AppHead";
import { GetStaticPropsResult, GetStaticPropsContext } from "next";
import { GetStaticPathsResult } from "next";

type GenericPageProps = {};

const GenericPage = memo(({}: GenericPageProps) => {
  return (
    <>
      <AppHead title="GenericPage" description="" />
    </>
  );
});
GenericPage.displayName = "GenericPage";

export default GenericPage;

export async function getStaticPaths(): Promise<GetStaticPathsResult<{}>> {
  return {
    paths: [
      {
        params: {
          params: [],
        },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps({
  params: { params },
}: GetStaticPropsContext<{ params: string[] }>): Promise<
  GetStaticPropsResult<GenericPageProps>
> {
  return {
    props: {},
  };
}
