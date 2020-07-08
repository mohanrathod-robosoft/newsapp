import React from "react";

import CommentCard from "../../molecule/Cards/CommentCard";
import { NewsResponse } from "../../../interfaces";

import "./style.scss";
import NewsCard from "../../molecule/Cards/NewsCard";
import Button from "../../atoms/Button";

interface Props {
  subUrl: string;
  commentsIdObj: NewsResponse;
}

const CommentsContainer = ({ commentsIdObj, subUrl }: Props) => {
  return (
    <div className="comments-container-wrapper">
      <NewsCard subUrl={`${subUrl}/${commentsIdObj.id}.json`} />
      <textarea name="text" rows={6} cols={60}></textarea>
      <br />
      <Button theme="rounded">add comment</Button>

      <div style={{ height: 10 }} />
      {Array.isArray(commentsIdObj.kids) &&
        commentsIdObj.kids.map((item: number, key: number) => (
          <CommentCard key={key} id={item} subUrl={subUrl} />
        ))}
      <div style={{ height: 10 }} />
    </div>
  );
};

export default CommentsContainer;
