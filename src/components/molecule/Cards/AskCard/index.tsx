import React, { useState, useEffect } from "react";
import { defer } from "rxjs";

import classes from "../style.scss";

import Text from "../../../atoms/Text";
import NavigationLink from "../../NavigationLink";
import { getDomainName, miliSecToTime } from "../../../../utils";
import { NewsResponse } from "../../../../interfaces";

interface Props {
  subUrl: string;
  index?: string | number | undefined;
  isShow?: boolean;
}

const AskCard = ({ subUrl, index, isShow = false }: Props) => {
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
          {isShow ? (
            <a
              rel="noopener noreferrer"
              className={classes.storylink}
              target="_blank"
              href={news.url || ""}
            >
              <Text element="text" label={news.title} />
            </a>
          ) : (
            <NavigationLink
              link={`item?id=${news.id}`}
              className={classes.storylink}
            >
              <Text element="text" label={news.title} />
            </NavigationLink>
          )}
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
          <NavigationLink
            element="span"
            fontSize="xs"
            fontColor="gray"
            link={`/item?id=${news.id}`}
            label={` | ${news.kids ? news.kids.length : 0} comments`}
          />
        </td>
      </tr>
      <tr style={{ height: 5 }}></tr>
    </>
  ) : (
    <></>
  );
};

export default AskCard;
