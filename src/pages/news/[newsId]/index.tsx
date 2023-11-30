import React, { memo } from "react";
import { AppHead } from "@/components/AppHead";
import { GetStaticPropsResult, GetStaticPropsContext } from "next";
import { GetStaticPathsResult } from "next";

type NewsDetailsProps = {
  newsId: string;
  date: string;
};

const NewsDetails = memo(({ newsId, date }: NewsDetailsProps) => {
  return (
    <>
      <AppHead title="NewsDetails" description="" />
      <div> News details for {newsId} </div>
      <h1>{date}</h1>
    </>
  );
});
NewsDetails.displayName = "NewsDetails";

export default NewsDetails;

const newsArray = ["1", "2", "3", "4", "5"];
export async function getStaticPaths(): Promise<
  GetStaticPathsResult<{
    newsId: string;
  }>
> {
  return {
    paths: newsArray.map((id) => ({
      params: {
        newsId: id,
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps({
  params: { newsId },
}: GetStaticPropsContext<{ newsId: string }>): Promise<
  GetStaticPropsResult<NewsDetailsProps>
> {
  if (parseInt(newsId) > newsArray.length)
    return {
      notFound: true,
    };
  return {
    props: {
      newsId: newsId,
      date: new Date().toString(),
    },
  };
}
