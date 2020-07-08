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

const AskCard = ({ subUrl, index }: Props) => {
  const [ask, setAsk] = useState<InitResponse>();
  const [cardLoader, setCardLoader] = useState<boolean>(true);

  useEffect(() => {
    const subscription = defer(() =>
      fetch(subUrl).then((res) => res.json())
    ).subscribe((resp: InitResponse) => {
      setAsk(resp);
      setCardLoader(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [subUrl]);

  if (cardLoader) {
    return <></>;
  }

  return ask ? (
    <>
      <tr>
        <td align="right">
          {index && <Text label={`${index}.`} fontColor="gray" />}
        </td>
        <td>
          <NavigationLink
            link={`item?id=${ask.id}`}
            className={classes.storylink}
          >
            <Text element="text" label={ask.title} />
          </NavigationLink>
          {ask.url && (
            <Text
              fontColor="gray"
              fontSize="sm"
              element="span"
              label={` (${getDomainName(ask.url)})`}
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
            label={`${ask.score} Points by ${ask.by}`}
          />
          <Text
            element="span"
            fontSize="xs"
            fontColor="gray"
            label={` ${miliSecToTime(ask.time || 0)}`}
          />
          <NavigationLink
            element="span"
            fontSize="xs"
            fontColor="gray"
            link={`/item?id=${ask.id}`}
            label={` | ${ask.kids ? ask.kids.length : 0} comments`}
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
