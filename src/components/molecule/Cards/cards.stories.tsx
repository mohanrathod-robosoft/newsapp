import * as React from "react";

import { storiesOf } from "@storybook/react";

import NewsCard from "../Cards/NewsCard";
import CommentCard from "../Cards/CommentCard";
import JobsCard from "../Cards/JobsCard";

import StoryRouter from "storybook-react-router";

import "../../../index.scss";

storiesOf("Molecule", module)
  .addDecorator(StoryRouter())
  .add("NewsCard", () => (
    <NewsCard
      index={1}
      subUrl="https://hacker-news.firebaseio.com/v0/item/9128264.json" //23734093.json
    />
  ))
  .add("CommentCard", () => (
    <CommentCard
      id={23734885}
      subUrl="https://hacker-news.firebaseio.com/v0/item/"
    />
  ))
  .add("JobsCard", () => (
    <JobsCard
      index={1}
      subUrl="https://hacker-news.firebaseio.com/v0/item/192327.json?print=pretty"
      
    />
  ))
