import React, { useState, useEffect } from "react";

import { defer } from "rxjs";

import classes from "../style.scss";

import { getDomainName, miliSecToTime } from "../../../../utils";

import Text from "../../../atoms/Text";
import NavigationLink from "../../NavigationLink";
import { NewsResponse } from "../../../../interfaces";

interface Props {
  subUrl: string;
  index?: string | number | undefined;
}

const NewsCard = ({ subUrl, index }: Props) => {
  const [news, setNews] = useState<NewsResponse>();
  const [cardLoader, setCardLoader] = useState<boolean>(true);

  useEffect(() => {
    const subscription = defer(() =>
      fetch(subUrl).then((res) => res.json())
    ).subscribe((resp: NewsResponse) => {
      setNews(resp);
      setCardLoader(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [subUrl]);

  if (cardLoader) {
    return <></>;
  }

  return news ? (
    <>
      <tr>
        <td align="right">
          {index && <Text label={`${index}.`} fontColor="gray" />}
        </td>
        <td>
          <a
            rel="noopener noreferrer"
            className={classes.storylink}
            target="_blank"
            href={news.url || ""}
          >
            <Text element="text" label={news.title} />
          </a>
          {news.url && (
            <Text
              fontColor="gray"
              fontSize="sm"
              element="span"
              label={` (${getDomainName(news.url)})`}
            />
          )}
        </td>
      </tr>
      <tr>
        <td></td>
        <td>
          <Text
            element="span"
            fontSize="xs"
            fontColor="gray"
            label={`${news.score} Points by ${news.by}`}
          />
          <Text
            element="span"
            fontSize="xs"
            fontColor="gray"
            label={` ${miliSecToTime(news.time || 0)}`}
          />
          <Text
            element="span"
            fontSize="xs"
            fontColor="gray"
            label={` | hide | `}
          />
          <NavigationLink
            element="span"
            fontSize="xs"
            fontColor="gray"
            link={`/item?id=${news.id}`}
            label={`${news.kids ? news.kids.length : 0} comments`}
          />
        </td>
      </tr>
      <tr style={{ height: 5 }}></tr>
    </>
  ) : (
    <></>
  );
};

export default NewsCard;
