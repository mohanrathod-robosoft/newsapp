import React, { useState, useEffect } from "react";
import { defer } from "rxjs";

import classes from "../style.scss";

import Text from "../../../atoms/Text";
import NavigationLink from "../../NavigationLink";
import { getDomainName, miliSecToTime } from "../../../../utils";
import { InitResponse } from "../../../../interfaces";

interface Props {
  subUrl: string;
  index?: string | number | undefined;
  isShow?: boolean;
}

const ShowCard = ({ subUrl, index }: Props) => {
  const [show, setShow] = useState<InitResponse>();
  const [cardLoader, setCardLoader] = useState<boolean>(true);

  useEffect(() => {
    const subscription = defer(() =>
      fetch(subUrl).then((res) => res.json())
    ).subscribe((resp: InitResponse) => {
      setShow(resp);
      setCardLoader(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [subUrl]);

  if (cardLoader) {
    return <></>;
  }

  return show ? (
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
            href={show.url || ""}
          >
            <Text element="text" label={show.title} />
          </a>
          {show.url && (
            <Text
              fontColor="gray"
              fontSize="sm"
              element="span"
              label={` (${getDomainName(show.url)})`}
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
            label={`${show.score} Points by ${show.by}`}
          />
          <Text
            element="span"
            fontSize="xs"
            fontColor="gray"
            label={` ${miliSecToTime(show.time || 0)}`}
          />
          <NavigationLink
            element="span"
            fontSize="xs"
            fontColor="gray"
            link={`/item?id=${show.id}`}
            label={` | ${show.kids ? show.kids.length : 0} comments`}
          />
        </td>
      </tr>
      <tr style={{ height: 5 }}></tr>
    </>
  ) : (
    <></>
  );
};

export default ShowCard;
