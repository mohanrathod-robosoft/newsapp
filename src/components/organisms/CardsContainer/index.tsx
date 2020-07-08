import React from "react";

import NewsCard from "../../molecule/Cards/NewsCard";
import NavigationLink from "../../molecule/NavigationLink";
import NewestCard from "../../molecule/Cards/NewestCard";
import AskCard from "../../molecule/Cards/AskCard";
import JobsCard from "../../molecule/Cards/JobsCard";

interface Props {
  newsArray: number[];
  subUrl: string;
  indexStart: number;
  nextPageQuery: string;
  isNextPage: boolean;
  type?: "news" | "newest" | "ask" | "show" | "jobs";
}

const CardsContainer = ({
  newsArray,
  nextPageQuery,
  subUrl,
  indexStart,
  isNextPage,
  type = "news",
}: Props) => {
  let renderNews =
    Array.isArray(newsArray) &&
    newsArray.map((item, index) => {
      if (type === "news") {
        return (
          <NewsCard
            index={indexStart + (index + 1)}
            key={index}
            subUrl={`${subUrl}/${item}.json`}
          />
        );
      }
      if (type === "newest") {
        return (
          <NewestCard
            index={indexStart + (index + 1)}
            key={index}
            subUrl={`${subUrl}/${item}.json`}
          />
        );
      }
      if (type === "ask") {
        return (
          <AskCard
            index={indexStart + (index + 1)}
            key={index}
            subUrl={`${subUrl}/${item}.json`}
          />
        );
      }
      if (type === "show") {
        return (
          <AskCard
            index={indexStart + (index + 1)}
            key={index}
            subUrl={`${subUrl}/${item}.json`}
            isShow={true}
          />
        );
      }
      if (type === "jobs") {
        return (
          <JobsCard
            index={indexStart + (index + 1)}
            key={index}
            subUrl={`${subUrl}/${item}.json`}
          />
        );
      }
    });

  return (
    <table>
      <tbody>
        <tr style={{ height: 10 }} />
        {renderNews}
        {isNextPage && (
          <tr>
            <td align="right">
              <NavigationLink
                fontColor="gray"
                element="div"
                link={nextPageQuery}
                label="More"
              />
            </td>
          </tr>
        )}
        <tr style={{ height: 10 }} />
      </tbody>
    </table>
  );
};

export default CardsContainer;
