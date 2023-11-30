import React, { memo } from "react";
import Link from "next/link";
import { AppHead } from "@/components/AppHead";
import { GetStaticPropsResult, GetStaticPropsContext } from "next";

type NewsProps = {};

const News = memo(({}: NewsProps) => {
  return (
    <>
      <AppHead title="News" description="" />

      <div>News!</div>
      <ul>
        <li>
          <Link href="/news/[newsId]" as="/news/1">
            news 1
          </Link>
        </li>
        <li>
          <Link href="/news/[newsId]" as="/news/2">
            news 2
          </Link>
        </li>
        <li>
          <Link href="/news/[newsId]" as="/news/3">
            news 3
          </Link>
        </li>
        <li>
          <Link href="/news/[newsId]" as="/news/4">
            news 4
          </Link>
        </li>
        <li>
          <Link href="/news/[newsId]" as="/news/5">
            news 5
          </Link>
        </li>
      </ul>
    </>
  );
});
News.displayName = "News";

export default News;

export async function getStaticProps({}: GetStaticPropsContext<{}>): Promise<
  GetStaticPropsResult<NewsProps>
> {
  return {
    props: {},
  };
}
