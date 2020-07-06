import React, { useState, useEffect } from "react";

import { defer } from "rxjs";

import classes from "./style.css";

import { getDomainName, miliSecToTime } from "../../../util";

import Text from '../../atoms/text';
import NavigationLink from "../NavigationLink";


const NewsBlock = ({ subUrl, index }) => {
  const [news, setNews] = useState();
  const [cardLoader, setCardLoader] = useState(true);

  useEffect(() => {
    const subscription = defer(() =>
      fetch(subUrl).then((res) => res.json())
    ).subscribe((resp) => {
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
          <Text textcolor="gray" label={`${index}.`} />
        </td>
        <td>
          <a
            rel="noopener noreferrer"
            className="alinks"
            target="_blank"
            href={news.url || ""}
          >
            <Text element="text" textcolor="gray" label={news.title} />
          </a>
          <Text element="span" textcolor="gray" textsize="span" label={` (${getDomainName(news.url || "")})`} />
        </td>
      </tr>
      <tr>
        <td></td>
        <td>
          <Text element="span" textcolor="gray" textsize="span" label={`${news.score} Points by ${news.by}`} />
          <Text element="span" textcolor="gray" textsize="span" label={` ${miliSecToTime(news.time || 0)}`} />
          <Text element="span" textcolor="gray" textsize="span" label={` | hide | `} />

          <NavigationLink
            textsize="span"
            textcolor="gray"
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

export default NewsBlock;
