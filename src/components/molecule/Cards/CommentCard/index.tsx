import React, { useState, useEffect } from "react";
import { defer } from "rxjs";

import Text from "../../../atoms/Text";
import { miliSecToTime } from "../../../../utils";

interface Props {
  subUrl: string;
  id: number;
  className?: string;
}

interface Response {
  by: string;
  id: number;
  text: string;
  time: number;
  kids: number[];
  type: number;
  deleted: boolean;
}

const CommentCard = ({ subUrl, id, className = "" }: Props) => {
  const [comments, setComments] = useState<Response>();
  const [cardLoader, setCardLoader] = useState<boolean>(true);

  useEffect(() => {
    const subscription = defer(() =>
      fetch(`${subUrl}/${id}.json`).then((res) => res.json())
    ).subscribe((resp: Response) => {
      setComments(resp);
      setCardLoader(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [subUrl]);

  if (cardLoader) {
    return <></>;
  }

  return comments && !comments.deleted ? (
    <div className={className}>
      <div>
        <Text
          element="span"
          label={`${comments.by} `}
          fontColor="gray"
          fontSize="sm"
        />
        <Text
          element="span"
          label={miliSecToTime(comments.time)}
          fontColor="gray"
          fontSize="sm"
        />
      </div>
      <div dangerouslySetInnerHTML={{ __html: comments.text }} />
      <Text label="reply" fontColor="gray" fontSize="sm" />
      <br />
      {Array.isArray(comments.kids) &&
        comments.kids.map((item: number, index: number) => (
          <CommentCard className="pl-2" key={index} subUrl={subUrl} id={item} />
        ))}
    </div>
  ) : (
    <></>
  );
};

export default CommentCard;
